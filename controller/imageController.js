'use strict';
const imageModel = require('./../model/imagens');
const mongoose   = require('mongoose'),
    Image = mongoose.model('images');
const mongoosePaginate = require('mongoose-paginate');


function getImages(req, res, next) {
    Image.find( function (err, result) {
        if (err) {
            next(err);
        } else {
            res.json({
                'result': result
            });
        }
    });

}

    
// imageModel.paginate({}, { page: page, limit: 5 }, function(res, err, results, pageCount, itemCount) {
//     if(err){
//         console.log(err);
//     } else {
//         res.json({
//             'result': results
//         });
//     }
// });

module.exports = {
    getImages: getImages,
};