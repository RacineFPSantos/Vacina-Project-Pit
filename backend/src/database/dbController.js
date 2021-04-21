const dbYear = [ '2021' ];
const dbMonth = [ { } ];

const EmptyArray = -1;
const idoso = 65;

const formatDateSplit = (dateVaccine) => {
  const arraySplit = dateVaccine.split('/');
  const date = {
    day: arraySplit[0],
    month: arraySplit[1],
    year: arraySplit[2],
  }

  return date;
}

const isEmptyOrUndefined = (array) => {
  return (typeof array === 'undefined' && array.length < 0)
}

const hasIn = (elementToFind, setToFind) => {
  try {
    return (elementToFind in setToFind);
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

const getAge = (date) => {
  var from = date.split("/");
  var birthdateTimeStamp = new Date(from[2], from[1] - 1, from[0]);
  var cur = new Date();
  var diff = cur - birthdateTimeStamp;
  var currentAge = Math.floor(diff/31557600000);
  
 return currentAge;
}

const addMonth = (dates, yearIndex, patient) => {
  if (isEmptyOrUndefined(dbMonth)) {
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
        let patient = dbMonth[yearIndex][dates.month][dates.day].find((patient) => (patient.timeVaccine === _patient.timeVaccine));
  
        if( getAge(patient.birthdate) >= idoso){
          throw new Error('Uma pessoa idosa já oculpa a vaga, tente outro horário!');          
        }

        if(getAge(_patient.birthdate) < getAge(patient.birthdate)){
          throw new Error('Horário já foi agendado, tente outro horário');  
        }     
      } 
    }else{
      let object = {};
      object[dates.day] = [{ ..._patient }];
      Object.assign(dbMonth[yearIndex][dates.month], object); 
      console.log("Esse aqui é o que? ")
    } 
  } catch (error) {
    return { status: 409 , message : error.message }
  }  

  return { status: 200 , message : "Agendado com sucesso" }
}

class databaseController {
  addNewScheduling(patient) {  
    const dates = formatDateSplit(patient.dateVaccine);
    const yearIndex = dbYear.indexOf(dates.year);

    if(yearIndex === EmptyArray) {
      dbYear.push(year);
    }

    return addMonth(dates, yearIndex, patient);
  }

  getData(date){
    const dates = formatDateSplit(date);   
    const yearIndex = dbYear.indexOf(dates.year);

    if(!(dbMonth[yearIndex] === EmptyArray)) {
      if(!isEmptyOrUndefined(dbMonth)){
        if(hasIn(dates.day, dbMonth[yearIndex][dates.month])){
          return dbMonth[yearIndex][dates.month][dates.day];
        }else {
          console.log("Não existe dia");
        }
      }else{
        console.log("Não existe mes");
      }
    }else {
      console.log("Não existe ano");
    }  
  }
}

module.exports = new databaseController();



