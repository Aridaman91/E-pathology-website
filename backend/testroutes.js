const express = require('express');
const router = express.Router();
const testControllers = require("../backend/controlers/test"); 


router.post('/post', testControllers.postTest);
router.get('/get', testControllers.getTest);
router.get('/get/:id', testControllers.getTestById); 

module.exports = router;
