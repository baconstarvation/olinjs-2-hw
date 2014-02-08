var mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_app22022794:onbv16pec74df9bknirkhao0qj@ds027789.mongolab.com:27789/heroku_app22022794' || 'localhost');

var catSchema = mongoose.Schema({
  age: Number,
  color: String,
  name: String,
});

var Cats = mongoose.model('Cats', catSchema);
module.exports = Cats;









