var mongoose = require('mongoose');

var LocationSchema = mongoose.Schema({
    Site        : {type: String, default: "VUMC"}, 
    Floor       : {type: String, default: "First"},
    Wing        : {type: String, default: "North"}
});

var Location = mongoose.model('Location', LocationSchema);
 
 module.exports = {
  Location: Location
 }