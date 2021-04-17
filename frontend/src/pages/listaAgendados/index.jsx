import React, { useState, useEffect } from 'react';
import Page from '../../components/page';
import axios from '../../utils/api';

import Table from '../../components/listPatient';

const index = () => {
  const [patientsList, setPatientsList] = useState([]);

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
        <Table patientsList={patientsList} />
      </div>
    </Page>
  );
};

export default index;
