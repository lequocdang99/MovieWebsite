const express = require('express');
const router = express.Router();

const GenreList = require('../controllers/genre');

//Fetch movie by genre
router.get('/:genreId/:page', GenreList.getGenre);

module.exports = router;
