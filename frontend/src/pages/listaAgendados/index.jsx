import React, { useState, useEffect, useContext } from 'react';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import Page from '../../components/page';
import axios from '../../utils/api';

import Table from '../../components/listPatient';
import { PatientsListContext } from '../../context/patientsListContext';
import { toastOptions } from '../../utils/toastOptions';

const index = () => {
  const { setPatientsList } = useContext(PatientsListContext);
  const [currentDate, setCurrentDate] = useState(new Date());

  const fetchData = async () => {
    const newDate = format(currentDate, 'dd/MM/yyyy');

    try {
      const response = await axios.get('/paciente', {
        params: {
          date: newDate,
        },
      });

      toast.info(response.data.data.message, { ...toastOptions });

      setPatientsList(response.data.data);
    } catch (error) {
      toast.info(error.message, { ...toastOptions });
    }
  };

  const getTomorrow = () => {
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(tomorrow.getDate() + 1);
    setCurrentDate(tomorrow);
  };

  const getYesterday = () => {
    const yesterday = new Date(currentDate);
    yesterday.setDate(yesterday.getDate() - 1);
    setCurrentDate(yesterday);
  };

  useEffect(() => {
    fetchData();
  }, [currentDate]);

  return (
    <Page>
      <div>
        <div className="btn-date">
          <button type="button" onClick={() => getYesterday()}>
            Ontem
          </button>
          <button type="button" onClick={() => setCurrentDate(new Date())}>
            Hoje
          </button>
          <button type="button" onClick={() => getTomorrow()}>
            Amanha
          </button>
        </div>
        <Table />
      </div>
    </Page>
  );
};

export default index;
