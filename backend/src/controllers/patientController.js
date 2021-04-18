const dbController = require('../database/dbController');

class PatientController {
  index(req, res) {
    res.send(database); 
  }

  store(req, res) {  
    const data = req.body;
    dbController.addNewScheduling(data);    
    res.send({ message: "Agendado com sucesso " });
  }  
}

module.exports = new PatientController();