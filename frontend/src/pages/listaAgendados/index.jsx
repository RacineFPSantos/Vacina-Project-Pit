import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Page from '../../components/page';
import axios from '../../utils/api';

import Table from '../../components/listPatient';

const index = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentList, setCurrentList] = useState([]);

  const getToday = () => new Date();

  const getTomorrow = (_currentDate) => {
    const tomorrow = new Date(_currentDate);
    tomorrow.setDate(tomorrow.getDate() + 1);
  };

  const getYesterday = (_currentDate) => {
    const tomorrow = new Date(_currentDate);
    tomorrow.setDate(tomorrow.getDate() + 1);
  };

  const setPatientsList = (date) => {
    setCurrentDate(date);
    return format(new Date(), 'dd/MM/yyy');
  };

  const fetchData = async (_date) => {
    try {
      const response = await axios.get('/paciente', {
        params: {
          date: _date,
        },
      });

      setCurrentList(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData(setPatientsList(new Date()));
  }, []);

  return (
    <Page>
      <div>
        <div className="btn-date">
          <button
            type="button"
            onClick={() => setPatientsList(getYesterday(currentDate))}
          >
            Ontem
          </button>
          <button type="button" onClick={() => setPatientsList(getToday())}>
            Hoje
          </button>
          <button
            type="button"
            onClick={() => setPatientsList(getTomorrow(currentDate))}
          >
            Amanha
          </button>
        </div>
        <Table currentList={currentList} />
      </div>
    </Page>
  );
};

export default index;
