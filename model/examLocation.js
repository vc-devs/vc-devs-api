'use strict';
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ExamLocation = new Schema({
  name_exam_location: {
    type: String
  },
  ano_exam_location: {
    type: Number
  },
  link_exam_location: {
    type: String
  }
},
{
    collection: 'exam_location'
});

module.exports = mongoose.model('examLocation', ExamLocation);