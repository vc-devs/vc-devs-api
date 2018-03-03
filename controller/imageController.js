'use strict';

const imageModel = require('./../model/imagens');
const mongoose   = require('mongoose'),
    Image = mongoose.model('images');

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

module.exports = {
    getImages: getImages,
};