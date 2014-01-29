/*
Create an app that has the following routes
GET /cats/new => creates a new cat. Cats have a random age, a list of colors, and a name. Don't hardcode these values.
GET /cats => shows a sorted list of cats by age. This should display their names, colors, and age
GET /cats/color/:color => where :color is a parameter, such as "orange" or "grey". It shows a sorted list of cats by age that have that specific color
GET /cats/delete/old => deletes the oldest cat :c The cat should no longer appear on any lists
*/

/**
 * Module dependencies.
 */

var express = require('express')
	, routes = require('./routes')
	, Cats = require('./models/cats') // added 1/29/2014
	, cats = require('./routes/cats') // added 1/29/2014
	, http = require('http')
	, path = require('path')
	, mongoose = require('mongoose');

var app = express();

// I added this. From HW#2. 'all environments' wrapped up in an app.configure function. 1/29/2014

app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	// app.use(express.json());
	// app.use(express.urlencoded());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
	app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/cats', cats.list); // added this on 1.28.2014


app.get('/cats/new', function(req, res) {
	// some code here
	// res.send('etcetcetcetcetc');
});

app.get('/cats', function(req, res) {
	// some code here
	// res.send('etcetcetcetcetc');
});

app.get('/cats/color/:color', function(req, res) {
	// some code here
	// res.send('etcetcetcetcetc');
});

app.get('/cats/delete/old', function(req, res) {
	// some code here
	// res.send('etcetcetcetcetc');
});

// app.listen(3000);


// 1.28: some shit to resolve from and earlier hw-2 commit, make sure it's (1) in the right place in this file, and if necessary in cats.js

/*
-// block 2
-app.get('/users/new', user.new);
 -// new code
 -app.get('/cats/new', function (req, res) {
 -  var kitty = new Cat({ name: 'Zildjian' });
 -  kitty.save(function (err) {
 -    if (err) 
 -      return console.log("error", err);
 -    res.send('meow');
 -  });
 -});
 -// end new code
*/



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
