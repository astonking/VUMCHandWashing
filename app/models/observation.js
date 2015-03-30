var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var observationSchema = mongoose.Schema({
    entry :  Boolean,
    handHygiene        : Boolean,
    contactPrecautions : Boolean,
    gown               : Boolean,
    gloves             : Boolean,
    
    date : {type: Date, default: Date.now},
    
    location : [locationSchema]
    
    
});

var locationSchema = mongoose.Schema({
    Site        : String,
    Wing        : String,
    Floor       : String
});


module.exports = mongoose.model('Observation', observationSchema);