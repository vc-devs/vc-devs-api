const express = require('express');
const router  = express.Router();
const image   = require('./../controller/imageController');

/* GET contact listing. */
router.post('/api/image', image.getImages);

module.exports = router;