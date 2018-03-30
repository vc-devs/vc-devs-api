'use strict';
const aprovedsModel = require('../model/aproveds');
const mongoose      = require('mongoose'),
    Aproveds        = mongoose.model('aproveds');

function getAproveds (req, res, next) {
    Aproveds.find(function (err, result) {
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
    getAproveds:  getAproveds
};