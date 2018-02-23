'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProvaModel = new Schema({
  name_prova: {
    type: String
  },
  ano_prova: {
    type: Number
  },
  link_prova: {
    type: String
  }
},
{
    collection: 'provas'
});

module.exports = mongoose.model('provas', ProvaModel);