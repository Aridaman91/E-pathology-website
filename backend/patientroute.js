const express = require('express');
const router = express.Router();
const patientControllers = require('../backend/controlers/patient');

router.post('/post', patientControllers.postPatient);
router.get('/get/:id', patientControllers.getPatientById);
router.get('/status/:statusFind', patientControllers.getPatientByStatus);
router.put('/update/:id', patientControllers.updatePatient);

module.exports = router;
