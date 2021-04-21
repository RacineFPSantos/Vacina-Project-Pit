const { 
  formatDateSplit, 
  isEmpty, 
  hasIn, 
  getAge 
} = require('../utils/utils');

const dbYear = [];
const dbMonth = [];

const EmptyArray = -1;
const idoso = 65;

const createNewMonthToArray = (month, index) => {  
  let object = {};
  object[month] = { };
  Object.assign(dbMonth[index], object);
}

const createNewDayToArray = (dates, yearIndex, _patient) => {
  let object = {};
  object[dates.day] = [{ ..._patient }];
  Object.assign(dbMonth[yearIndex][dates.month], object); 
}

const addMonth = (dates, yearIndex, patient) => {
  if(isEmpty(dbMonth)){
    dbMonth.push({});
  }

  if(!(dates.month in dbMonth[yearIndex])){
    createNewMonthToArray(dates.month, yearIndex);
  } 

  return addDay(dates, yearIndex, patient);
}

const addDay = (dates, yearIndex, _patient) => {
  try {
    if(dates.day in dbMonth[yearIndex][dates.month]) {  
      const exist = dbMonth[yearIndex][dates.month][dates.day].some(
        (patient) => (patient.timeVaccine === _patient.timeVaccine)
      );
  
      if(!exist){
        dbMonth[yearIndex][dates.month][dates.day].push( _patient);        
      }else {
        let patient = dbMonth[yearIndex][dates.month][dates.day].find(
          (patient) => (patient.timeVaccine === _patient.timeVaccine)
        );
  
        if( getAge(patient.birthdate) >= idoso){
          throw new Error('Uma pessoa idosa já oculpa a vaga, tente outro horário!');          
        }

        if(getAge(_patient.birthdate) < getAge(patient.birthdate)){
          throw new Error('Horário já foi agendado, tente outro horário');  
        }     
      } 
    }else{
      createNewDayToArray(dates, yearIndex, _patient);
    } 
  } catch (error) {
    return { status: 409 , message : error.message }
  }  
  
  return { status: 200 , message : 'Agendado com sucesso' }
}

class databaseController {
  addNewScheduling(patient) {  
    const dates = formatDateSplit(patient.dateVaccine);
    let yearIndex = dbYear.indexOf(dates.year);

    if(yearIndex === EmptyArray) {
      yearIndex = dbYear.push(dates.year) - 1;
    }

    return addMonth(dates, yearIndex, patient);
  }

  getData(date){
    const dates = formatDateSplit(date);   
    let yearIndex = dbYear.indexOf(dates.year);

    try {
      if(yearIndex === EmptyArray){
        throw new Error('Nenhum agendamento para esse ano encontrado'); 
      }

      if(isEmpty(dbMonth)){
        throw new Error('Nenhum agendamento para esse mês encontrado'); 
      }

      if(hasIn(dates.day, dbMonth[yearIndex][dates.month])){
        return dbMonth[yearIndex][dates.month][dates.day];
      }else{
        throw new Error('Nenhum agendamento para esse dia encontrado'); 
      }
      
    }catch(error){
      return { 
        status: 200, 
        message : error.message
      }
    }
  }
}

module.exports = new databaseController();
