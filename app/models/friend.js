var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var observationSchema = mongoose.Schema({
    observation             : {
      entry : {
        handHygiene        : Boolean,
        contactPrecautions : Boolean,
        gown               : Boolean,
        gloves             : Boolean
      },
        
      exit : {
        handHygiene        : Boolean,
        contactPrecautions : Boolean,
        gown               : Boolean,
        gloves             : Boolean
      },
      
      date : {type: Date, default: Date.now},
      
      location : [locationSchema]
      
    }
});

var locationSchema = mongoose.Schema({
    Site        : String,
    Wing        : String,
    Floor       : String
});
var friendSchema = mongoose.Schema({
    Site        : String,
    Wing        : String,
    Floor       : String
});

module.exports = mongoose.model('Friend', friendSchema);
