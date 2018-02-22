'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EditalModel = new Schema({
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
    collection: 'edital'
});

module.exports = mongoose.model('edital', EditalModel);