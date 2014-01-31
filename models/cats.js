var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'localhost');

var catSchema = mongoose.Schema({
  age: String,
  color: String,
  name: String,
});

// missing some other important code here, there, everywhere

var Cats = mongoose.model('Cats', catSchema);
module.exports = Cats;










