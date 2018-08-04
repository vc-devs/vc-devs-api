const express = require('express');
const router  = express.Router();
const edital  = require('./../controller/editalController');

/* GET contact listing. */
router.post('/api/edital', edital.getEditais);

module.exports = router;