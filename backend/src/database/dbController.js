const dbYear = [ '2021' ];
const dbMonth = [ 
  { 
    '04': { 
      '18': [
        {
          id: 'f4215b37-bff0-452d-8715-364cfec45360',
          name: 'Lux',
          birthdate: '01/04/2021',
          dateVaccine: '18/04/2021',
          timeVaccine: '13:30'
        },
        {
          id: 'f4215b37-bff0-452d-8715-364cfec45360',
          name: 'Morgana',
          birthdate: '01/04/2021',
          dateVaccine: '18/04/2021',
          timeVaccine: '10:30'
        },
        {
          id: 'f4215b37-bff0-452d-8715-364cfec45360',
          name: 'Nasus',
          birthdate: '01/04/2021',
          dateVaccine: '18/04/2021',
          timeVaccine: '08:30'
        }
      ],
      '19': [
        {
        id: 'f4215b37-bff0-452d-8715-364cfec45360',
        name: 'Miss Fortune',
        birthdate: '01/04/2021',
        dateVaccine: '19/04/2021',
        timeVaccine: '07:00'
        },
        {
        id: 'f4215b37-bff0-452d-8715-364cfec45360',
        name: 'Amumu',
        birthdate: '01/04/2021',
        dateVaccine: '19/04/2021',
        timeVaccine: '07:30'
        },
        {
        id: 'f4215b37-bff0-452d-8715-364cfec45360',
        name: 'Aurelion Sol',
        birthdate: '01/04/2021',
        dateVaccine: '19/04/2021',
        timeVaccine: '16:30'
        }
      ]
    }  
  } 
];

const EmptyArray = -1;

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

class databaseController {
  addNewScheduling(patient) {  
    const dates = formatDateSplit(patient.dateVaccine);
    const yearIndex = dbYear.indexOf(dates.year);

    if(yearIndex === EmptyArray) {
      dbYear.push(year);
    }

    addMonth(dates, yearIndex, patient);

    console.log(dbMonth[0][dates.month][dates.day])
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



