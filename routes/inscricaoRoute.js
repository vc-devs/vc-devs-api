const express = require('express');
const router  = express.Router();
const email   = require('./../controller/inscricaoController');

/* GET contact listing. */
router.post('/api/inscricao', inscricao.sendMail);

module.exports = router;