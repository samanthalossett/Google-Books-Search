var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    title: String,
    authors: String,
    description: String,
    image: String,
    link: String
  });

  var Book = mongoose.model('Book', bookSchema);

  module.exports= Book;