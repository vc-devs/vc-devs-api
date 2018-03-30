const express      = require('express');
const router       = express.Router();
const examLocation = require('../controller/examLocationController');

/* GET contact listing. */
router.post('/api/exam/location', examLocation.getExamLocation);

module.exports = router;