'use strict';
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema   = mongoose.Schema;


var ImageModel = new Schema({
        link_imagem: {
            type: String
        }
    },
    {
        collection: 'images'
    }
);

ImageModel.plugin(mongoosePaginate);
module.exports = mongoose.model('images', ImageModel);