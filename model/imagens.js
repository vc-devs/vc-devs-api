'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ImageModel = new Schema({
  link_imagem: {
    type: String
  }
},
{
    collection: 'images'
});

module.exports = mongoose.model('images', ImageModel);