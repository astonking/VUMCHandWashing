var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  user             : {
    email        : String,
    password     : String,
    name	     	 : String,
    pager        : { type: String, default: "No Pager Entered"},
    entries      : { type: Number, default: 0},
    maxEntries   : { type: Number, default: 10},
    lookback     : { type: String, default: "1 Week"},
    lastloc      : [locationSchema]
  }
});

var locationSchema = mongoose.Schema({
    Site        : String,
    Wing        : String,
    Floor       : String
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.user.password);
};

userSchema.methods.updateUser = function(request, response){

	this.user.name = request.body.name;
	this.user.pager = request.body.pager;
  
	this.user.maxEntries = request.body.maxEntries;
	this.user.save();
	response.redirect('/user');
};




module.exports = mongoose.model('User', userSchema);
