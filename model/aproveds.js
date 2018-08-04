'use strict';
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var AprovedslModel = new Schema({
  name: {
    type: String
  },
  n_inscricao: {
    type: Number
  }
},
{
    collection: 'aproveds'
});

module.exports = mongoose.model('aproveds', AprovedslModel);