import React, { useState, useEffect } from 'react';
import Page from '../../components/page';
import axios from '../../utils/api';

import Table from '../../components/listPatient';

const index = () => {
  const [patientList, setPatientList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/paciente');
      setPatientList(response.data);
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
        <Table patientList={patientList} />
      </div>
    </Page>
  );
};

export default index;
