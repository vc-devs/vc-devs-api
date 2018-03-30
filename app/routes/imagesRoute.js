const express = require('express');
const router  = express.Router();
const image   = require('../controller/imageController');

/* GET contact listing. */
 router.post('/api/image', image.getImages);

// router.post('/api/image', image.getImages, function(req, res, next) {
//     var perPage = 5
//     var page = req.params.page || 1

//     Image
//         .find({})
//         .skip((perPage * page) - perPage)
//         .limit(perPage)
//         .exec(function(err, images) {
//             Image.count().exec(function(err, count) {
//                 if (err) return next(err)
//                 res.json({
//                     images: images,
//                     current: page,
//                     pages: Math.ceil(count / perPage)
//                 })
//             })
//         })
// })


module.exports = router;