
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

// how does this compare to app.get('/cats', cats.list) up there
app.get('/cats', function(req, res) {
	// shows a sorted list of cats by age. This should display their names, colors, and age
	// you're going to want index / to have the equivalent behavior of /cats
	// res.send('list of all cats with age, colors, and name');
});

app.get('/cats/new', function(req, res) {
	// create a random cat. then re-route to /cats to show the full list of cats
	// res.send('etcetcetcetcetc');
		// needs random age, to pick from a list of colors, and a random name.
		/*
		var kitty = new Cat({ name: 'Zildjian' });
			kitty.save(function (err) {
				if (err) 
					return console.log("error", err);
					res.send('meow');
			});
		});
		*/
});

app.get('/cats/color/:color', function(req, res) {
	// shows a sorted list of cats by age that have that specific color
	// res.send('etcetcetcetcetc');
});

app.get('/cats/delete/old', function(req, res) {
	// deletes the oldest cat :c The cat should no longer appear on any lists
	// res.send('etcetcetcetcetc');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
