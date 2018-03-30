'use strict';
const examLocation = require('../model/examLocation');
const mongoose     = require('mongoose'),
    ExamLocation   = mongoose.model('examLocation');

function getExamLocation(req, res, next) {
    ExamLocation.find( function (err, result) {
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
    getExamLocation: getExamLocation,
};