// routes for cats
var Cats = require('../models/cats')

// not sure what to do with the code below yet. it's a re-working of old user.js code from olinjs-2

// listing all of the cats
exports.list = function(req, res) {
	// get the list of cats
	var cats = Cats.find({}, function (err, docs) {
		if (err)
			return console.log("error", cats);
		// send it back
		res.render('cats', {cats: docs, title: 'My First cats'});
	});
};

// creating a new cat
exports.create = function(req, res) {
	// create the cats
	var fatso = new Cats({ age: '80', color: 'dicaprio', name: 'fatso'});
	fatso.save(function (err) {
		if (err)
			return console.log("error we couldn't save fatso");
		// redirect to the list of cats
		res.redirect('/cats');
	});
};