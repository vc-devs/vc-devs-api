'use strict';
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var EditalModel = new Schema({
  name_edital: {
    type: String
  },
  ano_edital: {
    type: Number
  },
  link_edital: {
    type: String
  }
},
{
    collection: 'edital'
});

module.exports = mongoose.model('edital', EditalModel);