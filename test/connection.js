var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: SAM FREAK OUT NOW'));
db.once('open', function() {
    console.log("YOU'RE CONNECTED TO MONGO SAM! whoop!");
  // we're connected!
});