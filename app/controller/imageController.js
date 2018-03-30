'use strict';
const imageModel = require('../model/imagens');
const mongoose   = require('mongoose'),
    Image = mongoose.model('images');

function getImages (req, res, next) {
    const page = req.body.page;

    if (page) {
        Image.paginate({}, {page: page, limit: 5},
            function (error, response) {

                if (error) {
                    console.log(err);
                } else {
                    res.json({
                        'result': response
                    });
                }
            });
    } else {
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

}

module.exports = {
    getImages: getImages
};