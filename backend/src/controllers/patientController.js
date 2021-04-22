const dbController = require('../database/dbController');

class PatientController {
  async index(req, res) {
    const param = req.query.date
    const data = await dbController.getData(param);
    res.send({ data });
  }

  async store(req, res) {  
    const data = req.body;
    const result = await dbController.addNewScheduling(data);
    res.status(result.status).json({ message: result.message})
  }  

  async update(req, res) {
    const data = req.body;
    const result = await dbController.updateData(data);

    res.status(result.status).json({ message: result.message})
  }
}

module.exports = new PatientController();