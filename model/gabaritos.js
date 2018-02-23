'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GabaritoModel = new Schema({
  name_gabarito: {
    type: String
  },
  ano_gabarito: {
    type: Number
  },
  link_gabarito: {
    type: String
  }
},
{
    collection: 'gabarito'
});

module.exports = mongoose.model('gabarito', GabaritoModel);