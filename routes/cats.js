// routes for cats
var Cats = require('../models/cats')

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
	
	var ageArray = [23,5,3,6,11,14,15,18,9,8];
	var colorArray = ["blue","black","brown","purple","white","grey","gray","orange","red","magenta"];
	var nameArray = ["peyton","tom","bill","russell","troy","pete","jim","john","lovie","colin"];

	var age = ageArray[Math.floor(Math.random() * ageArray.length)];
	var color = ageArray[Math.floor(Math.random() * ageArray.length)];
	var name = ageArray[Math.floor(Math.random() * ageArray.length)];
	
	var fatso = new Cats({age, color, name});
	fatso.save(function (err) {
		if (err)
			return console.log("error we couldn't save fatso");
		// redirect to the list of cats
		res.redirect('/cats');
	});
};