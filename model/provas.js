'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProvaModel = new Schema({
  name: {
    type: String
  },
  year: {
    type: Number
  },
  link: {
    type: String
  }
},
{
    collection: 'provas'
});

module.exports = mongoose.model('Prova', ProvaModel);