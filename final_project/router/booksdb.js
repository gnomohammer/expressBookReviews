const express = require('express');
const router = express.Router;
let books = {
      1: {"author": "Chinua Achebe","title": "Things Fall Apart", "reviews": {}, "ISBN":"A000" },
      2: {"author": "Hans Christian Andersen","title": "Fairy tales", "reviews": {}, "ISBN":"A002" },
      3: {"author": "Dante Alighieri","title": "The Divine Comedy", "reviews": {}, "ISBN":"A004" },
      4: {"author": "Unknown","title": "The Epic Of Gilgamesh", "reviews": {}, "ISBN":"A005" },
      5: {"author": "Unknown","title": "The Book Of Job", "reviews": {}, "ISBN":"A0006" },
      6: {"author": "Unknown","title": "One Thousand and One Nights", "reviews": {}, "ISBN":"A0007" },
      7: {"author": "Unknown","title": "Nj\u00e1l's Saga", "reviews": {}, "ISBN":"A0009" },
      8: {"author": "Jane Austen","title": "Pride and Prejudice", "reviews": {}, "ISBN":"A00056" },
      9: {"author": "Honor\u00e9 de Balzac","title": "Le P\u00e8re Goriot", "reviews": {"1":"very good book"}, "ISBN":"A00078" },
      10: {"author": "Samuel Beckett","title": "Molloy, Malone Dies, The Unnamable, the trilogy", "reviews": {}, "ISBN":"A0076" }
}

module.exports=books;
