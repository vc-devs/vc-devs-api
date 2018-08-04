'use strict';
const provaModel = require('./../model/provas');
const mongoose   = require('mongoose'),
    Prova        = mongoose.model('provas');

function getProvas(req, res, next) {
    Prova.find( function (err, result) {
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
    getProvas: getProvas,
};