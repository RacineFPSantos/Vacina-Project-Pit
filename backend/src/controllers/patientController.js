const database = require('../database/db');

class PatientController {
  store(req, res) {
    database.push(req.body);
    console.log(database);
    res.send({ message: "Agendado com sucesso " });
  }  
}

module.exports = new PatientController();