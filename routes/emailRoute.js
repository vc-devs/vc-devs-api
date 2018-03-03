const express = require('express');
const router  = express.Router();
const email   = require('./../controller/emailController');

/* GET contact listing. */
router.post('/api/email', email.contact);
router.post('/api/email/inscricao', email.inscricao);

module.exports = router;