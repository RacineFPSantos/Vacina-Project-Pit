import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Page from '../../components/page';
import axios from '../../utils/api';

import Table from '../../components/listPatient';

const index = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentList, setCurrentList] = useState([]);

  const fetchData = async () => {
    const newDate = format(currentDate, 'dd/MM/yyyy');

    try {
      const response = await axios.get('/paciente', {
        params: {
          date: newDate,
        },
      });

      setCurrentList(response.data.data);
    } catch (error) {
      console.log(error.message);
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
        <Table currentList={currentList} />
      </div>
    </Page>
  );
};

export default index;
