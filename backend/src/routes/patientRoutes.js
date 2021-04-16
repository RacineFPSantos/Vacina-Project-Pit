const { Router } = require("express");
const PatientController = require("../controllers/patientController");

const router = Router();

router.get("/paciente", PatientController.index);
router.post("/paciente", PatientController.store);

module.exports = router;