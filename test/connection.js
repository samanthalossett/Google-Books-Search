var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/googlebooks', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: SAM FREAK OUT NOW'));
db.once('open', function() {
    console.log("YOU'RE CONNECTED TO MONGO SAM! whoop!");
  // we're connected!
});

var bookSchema = new mongoose.Schema({
    title: String,
    authors: String,
    description: String,
    image: String,
    link: String
  });

  var Book = mongoose.model('Book', bookSchema);

  var SearchedBook= new Book ({ 
title: "Potter", 
  authors: "JK Rowling",
  description: "The best books ever written.",
  image: "https://www.catholicnewsagency.com/images/Harry_Potter_movie.jpg?w=760",
  link: "empty link",
 });
  console.log("You're books so far: "+ "" + SearchedBook.title);

  SearchedBook.save(function (err){
      if (err) return console.error(err);
  });

  Book.find(function (err, Books){
      if (err) return console.error(err);
      console.log(Books);
  })
