const { Router } = require("express");
const PatientController = require("../controllers/patientController");

const router = Router();

router.get("/paciente", PatientController.index);
router.post("/paciente", PatientController.store);
router.put("/paciente/:id", PatientController.updatePatient);
router.put("/paciente", PatientController.updateData);

module.exports = router;