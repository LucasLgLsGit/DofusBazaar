const express = require('express');
const router = express.Router();
const typeControlleur = require('../controllers/typeController');

router.get('/', typeControlleur.getTypes);

router.post('/', typeControlleur.createType);

module.exports = router;