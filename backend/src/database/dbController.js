const dbYear = [ '2021' ];
const dbMonth = [{}];

const EmptyArray = -1;

const addMonth = (dates, yearIndex, patient) => {
  if (typeof dbMonth !== 'undefined' && dbMonth.length > 0) {
    if(dates.month in dbMonth[yearIndex]){
      console.log("Month aready exists")
    }else {
      let object = {};
      object[dates.month] = { };
      Object.assign(dbMonth[yearIndex], object);
    }

  }else {
    console.log("Undefined or Empty")
  }

  addDay(dates, yearIndex, patient);
}

const addDay = (dates, yearIndex, _patient) => {
  if(dates.day in dbMonth[yearIndex][dates.month]) {  

    const exist = dbMonth[yearIndex][dates.month][dates.day].some(
      (patient) => (patient.timeVaccine === _patient.timeVaccine)
    );

    if(!exist){
      dbMonth[yearIndex][dates.month][dates.day].push( _patient);
    }else {
      /* 
        return error.message{"Horario já foi tomado"} 
        retorna os horarios disponiveis;
      */
      console.log("Horario já foi reservado");
    }
 
  }else{
    let object = {};
    object[dates.day] = [{ ..._patient }];
    Object.assign(dbMonth[yearIndex][dates.month], object);   
  } 
}

const formatDateSplit = (dateVaccine) => {
  const arraySplit = dateVaccine.split('/');
  const date = {
    day: arraySplit[0],
    month: arraySplit[1],
    year: arraySplit[2],
  }

  return date;
}

class databaseController {
  addNewScheduling(patient) {  
    const dates = formatDateSplit(patient.dateVaccine);
    const yearIndex = dbYear.indexOf(dates.year);

    if(yearIndex === EmptyArray) {
      dbYear.push(year);
    }

    addMonth(dates, yearIndex, patient);
  }

  getData(){
    return database;
  }
}

module.exports = new databaseController();



