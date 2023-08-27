const express = require('express');
const calculatorController = require('../controllers/calculator');
const router = express.Router();

module.exports = router;

router.post('/add',calculatorController.add);

router.post('/sub',calculatorController.sub);

router.post('/multiply',calculatorController.multiply);

router.post('/divide',calculatorController.divide);