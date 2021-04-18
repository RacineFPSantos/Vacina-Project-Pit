const dbController = require('../database/dbController');

class PatientController {
  index(req, res) {
    const param = req.query.date
    const data = dbController.getData(param);
    res.send({ data });
  }

  store(req, res) {  
    const data = req.body;
    dbController.addNewScheduling(data);    
    res.send({ message: "Agendado com sucesso " });
  }  
}

module.exports = new PatientController();