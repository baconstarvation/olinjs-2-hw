
/**
 * Module dependencies.
 */

var express = require('express')
	, routes = require('./routes')
	, Cats = require('./models/cats')
	, cats = require('./routes/cats')
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
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
	app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/cats', cats.list);
app.get('/cats/new', cats.newCat);




app.get('/cats/color/:color', function(req, res) {
	// shows a sorted list of cats by age that have that specific color
	// res.send('etcetcetcetcetc');
});

app.get('/cats/delete/old', function(req, res) {
	// delete the oldest cat. The cat should no longer appear on any lists
	// res.send('etcetcetcetcetc');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
