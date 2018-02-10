const express = require('express');
const router  = express.Router();
const email   = require('./../controller/emailController');

/* GET contact listing. */
router.post('/api/email', email.sendMail);

module.exports = router;