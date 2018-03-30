const express = require('express');
const router  = express.Router();
const gabarito   = require('../controller/gabaritoController');

/* GET contact listing. */
router.post('/api/gabarito', gabarito.getGabaritos);

module.exports = router;