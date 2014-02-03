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
	
	var ageArrayRandom = ageArray[Math.floor(Math.random() * ageArray.length)];
	var colorArrayRandom = ageArray[Math.floor(Math.random() * ageArray.length)];
	var nameArrayRandom = ageArray[Math.floor(Math.random() * ageArray.length)];
	
	var kitty = new Cats({ age: ageArrayRandom, color: colorArrayRandom, name: nameArrayRandom});
	kitty.save(function (err) {
		if (err)
			return console.log("error we couldn't save kitty");
			/*else {
				console.log(kitty.name, kitty.age, kitty.color);
				res.send("This is a new cat named " + kitty.name + ". It is the color of " + kitty.color + ". It is " + kitty.age + " years old.");
			}*/
		// redirect to the list of cats
		res.redirect('/cats');
	});
};
