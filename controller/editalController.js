'use strict';
const gabaritoModel = require('./../model/editais');
const mongoose      = require('mongoose'),
    Edital          = mongoose.model('edital');

function getEditais(req, res, next) {
    Edital.find( function (err, result) {
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
    getEditais: getEditais,
};