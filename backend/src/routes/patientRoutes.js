const { Router } = require("express");
const PatientController = require("../controllers/patientController");

const router = Router();

router.post("/paciente", PatientController.store);

module.exports = router;