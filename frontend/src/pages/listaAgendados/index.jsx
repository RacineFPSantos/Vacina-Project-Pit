import React, { useState, useEffect, useContext } from 'react';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import Page from '../../components/page';
import axios from '../../utils/api';

import Table from '../../components/listPatient';
import { PatientsListContext } from '../../context/patientsListContext';
import { toastOptions } from '../../utils/toastOptions';
import { loadLocal, storeLocal } from '../../utils/localStorage';
import { getPreviewsDay, getNextDay } from '../../utils/dateFormatter';

const index = () => {
  const { patientsList, setPatientsList } = useContext(PatientsListContext);
  const [loading, setLoading] = useState(false);
  const [networkError, setNetworkError] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const fetchData = async () => {
    setLoading(true);
    const newDate = format(currentDate, 'dd/MM/yyyy');

    try {
      const response = await axios.get('/paciente', {
        params: {
          date: newDate,
        },
      });

      if (response.data.data.message) {
        toast.info(response.data.data.message, { ...toastOptions });
      }

      setPatientsList(response.data.data);
      storeLocal(newDate, response.data.data);
      setLoading(false);
    } catch (error) {
      if (error.message === 'Network Error') {
        setPatientsList(loadLocal(newDate));
        setLoading(false);
        setNetworkError(true);
        toast.error('Erro de conexão, usando versão local dos dados', {
          ...toastOptions,
        });
      }
    }
  };

  const UpdateToRemote = async () => {
    try {
      const newDate = format(currentDate, 'dd/MM/yyyy');
      const data = { date: newDate, patientsList };

      await axios.put('/paciente', data);

      setNetworkError(false);
    } catch (error) {
      if (error.message === 'Network Error') {
        toast.error('Erro de conexão, ação impossibilitada', {
          ...toastOptions,
        });
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentDate]);

  return (
    <Page>
      <div>
        <div className="btn-date">
          <Button
            type="button"
            onClick={() => setCurrentDate(getPreviewsDay(currentDate))}
          >
            Ontem
          </Button>
          <Button type="button" onClick={() => setCurrentDate(new Date())}>
            Hoje
          </Button>
          <Button
            type="button"
            onClick={() => setCurrentDate(getNextDay(currentDate))}
          >
            Amanha
          </Button>
        </div>
        <div>{loading ? <h3>Loading...</h3> : <Table />}</div>
        {networkError ? (
          <div className="d-flex justify-content-end">
            <Button type="button" onClick={UpdateToRemote}>
              Atualizar dados
            </Button>
          </div>
        ) : null}
      </div>
    </Page>
  );
};

export default index;
