'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProvaModel = new Schema({
  name: {
    type: String
  },
  ano: {
    type: Number
  },
  link: {
    type: String
  }
},
{
    collection: 'provas'
});

module.exports = mongoose.model('provas', ProvaModel);