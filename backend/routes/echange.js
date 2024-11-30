const express = require('express');
const router = express.Router();
const echangeController = require('../controllers/echangeController');

router.get('/', echangeController.getEchanges);

router.post('/', echangeController.createEchange);

router.delete('/:id', echangeController.deleteEchange);

router.put('/:id', echangeController.modifyEchange);

module.exports = router;