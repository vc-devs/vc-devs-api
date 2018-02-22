const express = require('express');
const router  = express.Router();
const prova   = require('./../controller/provaController');

/* GET contact listing. */
router.post('/api/provas', prova.getProvas);

module.exports = router;