const dbController = require('../database/dbController');

class PatientController {
  index(req, res) {
    const param = req.query.date
    const data = dbController.getData(param);
    res.send({ data });
  }

  store(req, res) {  
    const data = req.body;
    const result = dbController.addNewScheduling(data);
    res.status(result.status).json({ error: result.message})
  }  
}

module.exports = new PatientController();