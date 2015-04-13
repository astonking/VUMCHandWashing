var mongoose = require('mongoose');

var ObservationSchema = mongoose.Schema({
    entry              : Boolean,
    handHygiene        : Boolean,
    contactPrecautions : Boolean,
    gown               : Boolean,
    gloves             : Boolean,
    
    date : {type: Date, default: Date.now},
    
    location : {type: mongoose.Schema.Types.ObjectId, ref: 'location'}
});

var Observation = mongoose.model('Observation', ObservationSchema);
/*
ObservationSchema.methods.observe = function(request, response){

	this.name = request.body.name;
	this.pager = request.body.pager;
  
	this.maxEntries = request.body.maxEntries;
	this.save();
	response.redirect('/user');
};
*/
module.exports = {
  Observation: Observation
}