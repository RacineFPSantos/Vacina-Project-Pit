const database = require('../database/db');

class PatientController {
  index(req, res) {
    res.send(database); 
  }

  store(req, res) {
    console.log(req.body);

    // database.push(req.body);
    res.send({ message: "Agendado com sucesso " });
  }  
}

module.exports = new PatientController();