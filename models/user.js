var mongoose = require('mongoose');
var Schema = mongoose.Schema; // Not sure if this line here is needed
mongoose.connect(process.env.MONGOLAB_URI || 'localhost');
// mongoose.connect('mongodb://localhost/test'); // Test database; will probably want to use this over localhost

var userSchema = mongoose.Schema({
	name: String,
	grade: String,
	class: Number
});

var User = mongoose.model('User', userSchema);

// 


// just an example
/*
var bob = new User({name: 'bob', grade: 'A', class: '2013'});
bob.save(function (err) {
	if(err)
		console.log("Problem saving bob", err);
});
*/

// Not sure if this is needed:
// module.exports = User;

