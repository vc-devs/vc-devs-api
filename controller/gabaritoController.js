'use strict';
const gabaritoModel = require('./../model/gabaritos');
const mongoose      = require('mongoose'),
    Gabarito        = mongoose.model('gabarito');

function getGabaritos(req, res, next) {
    Gabarito.find( function (err, result) {
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
    getGabaritos: getGabaritos,
};