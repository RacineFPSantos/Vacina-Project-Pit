import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Page from '../../components/page';
import axios from '../../utils/api';

import Table from '../../components/listPatient';

const index = () => {
  const [patientsList, setPatientsList] = useState([]);
  const [currentList, setCurrentList] = useState([]);

  const patientsOfTheDay = (date) => {
    if (patientsList === null) {
      console.log('Check before');
    }

    const otherDate = format(date, 'MM-dd-yy');

    const list = patientsList.filter(
      (patient) =>
        new Date(otherDate).getTime() ===
        new Date(format(new Date(patient.dateVaccine), 'MM-dd-yyy')).getTime(),
    );

    setCurrentList(list);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('/paciente');
      setPatientsList(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Page>
      <div>
        <div className="btn-date">
          <button type="button" onClick={() => patientsOfTheDay(new Date())}>
            Ontem
          </button>
          <button type="button" onClick={() => patientsOfTheDay(new Date())}>
            Hoje
          </button>
          <button type="button" onClick={() => patientsOfTheDay(new Date())}>
            Amanha
          </button>
        </div>
        <Table currentList={currentList} trigger={patientsOfTheDay} />
      </div>
    </Page>
  );
};

export default index;
