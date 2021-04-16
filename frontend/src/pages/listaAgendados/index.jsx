import React, { useState, useEffect } from 'react';
import Page from '../../components/page';
import axios from '../../utils/api';
import {
  formatDate,
  formatTime,
  calculateAge,
} from '../../utils/dateFormatter';

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
        <table id="customers">
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Data Vacina</th>
            <th>Horario Vacina</th>
            <th>Observações</th>
          </tr>
          {patientList.map(({ name, birthdate, dateVaccine }) => (
            <tr key={name}>
              <td>{name}</td>
              <td className="td-center">
                {calculateAge(new Date(), new Date(birthdate))}
              </td>
              <td>{formatDate(new Date(dateVaccine))}</td>
              <td>{formatTime(new Date(dateVaccine))}</td>
              <td>
                <button type="button">Editar</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </Page>
  );
};

export default index;
