const express  = require('express');
const router   = express.Router();
const aproveds = require('./../controller/aprovedsController');

/* GET contact listing. */
router.post('/api/aproveds',     aproveds.getAproveds);

module.exports = router;