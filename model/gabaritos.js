'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GabaritoModel = new Schema({
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
    collection: 'gabaritos'
});

module.exports = mongoose.model('gabarito', GabaritoModel);