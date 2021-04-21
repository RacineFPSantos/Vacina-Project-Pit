exports.formatDateSplit = (dateVaccine) => {
  const arraySplit = dateVaccine.split('/');
  const date = {
    day: arraySplit[0],
    month: arraySplit[1],
    year: arraySplit[2],
  }

  return date;
}

exports.isEmpty = (array) => {
  return !array.length
}

exports.hasIn = (elementToFind, setToFind) => {
  try {
    return (elementToFind in setToFind);
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

exports.getAge = (date) => {
  var from = date.split("/");
  var birthdateTimeStamp = new Date(from[2], from[1] - 1, from[0]);
  var cur = new Date();
  var diff = cur - birthdateTimeStamp;
  var currentAge = Math.floor(diff/31557600000);
  
 return currentAge;
}