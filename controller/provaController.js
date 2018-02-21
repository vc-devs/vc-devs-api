'use strict';
const _ = require('lodash');
const mongoose = require('mongoose'),
    Prova = mongoose.model('Prova');

function getProvas(req, res, next) {
    Prova.aggregate([{
        $group: {
            '_id': req.body.id,
            'count': {
                '$sum': 1
            }
        }
    }], function (err, result) {
        if (err) {
            next(err);
        } else {
            res.json({
                'result': result
            });
        }
    });

}

function getGabaritos(req, res, next) {
    Result.aggregate([{
        $group: {
            '_id': req.body.id,
            'count': {
                '$sum': 1
            }
        }
    }], function (err, result) {
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
    saveResult: saveResult,
    getData: getData,
    getResult: getResult
};