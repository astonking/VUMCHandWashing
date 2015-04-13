var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');


var UserSchema = mongoose.Schema({
    email        : String,
    password     : String,
    name	     	 : String,
    pager        : { type: String, default: "No Pager Entered"},
    maxEntries   : { type: Number, default: 10},
    lookback     : { type: String, default: "1 Week"},
    curLocation    : {type: mongoose.Schema.Types.ObjectId, ref: 'Location'},
    allowedLocations    : [{type: mongoose.Schema.Types.ObjectId, ref: 'Location'}],
    observations : [{type: mongoose.Schema.Types.ObjectId, ref: 'Observation'}]
});


UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.updateUser = function(request, response){

	this.name = request.body.name;
	this.pager = request.body.pager;
  
	this.maxEntries = request.body.maxEntries;
	this.save();
	response.redirect('/user');
};
/*
UserSchema.methods.newObservation = function(request, response){

	this.observations. = request.body.name;
	this.pager = request.body.pager;
  
	this.maxEntries = request.body.maxEntries;
	this.save();
	response.redirect('/user');
};
*/
module.exports=  mongoose.model('User', UserSchema);
