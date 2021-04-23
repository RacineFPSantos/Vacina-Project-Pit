const loadLocal = (date) => {
  const patients = JSON.parse(localStorage.getItem(date));

  if (patients !== null) {
    return patients;
  }

  return [];
};

const storeLocal = (date, data) => {
  localStorage.setItem(date, JSON.stringify(data));
};

const updateLocal = (date, _patient) => {
  const patientsList = loadLocal(date);

  const oldPatientIndex = patientsList.findIndex(
    (patient) => patient.id === _patient.id,
  );

  patientsList[oldPatientIndex] = { ..._patient };
  localStorage.setItem(date, JSON.stringify(patientsList));
};

export { loadLocal, storeLocal, updateLocal };
