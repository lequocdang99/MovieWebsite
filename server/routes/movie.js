const express = require("express");
const router = express.Router();
//Movie controller
const movieController = require("../controllers/movie");
//Fetch all movies
router.get("/:page", movieController.getMovies);
//Fetch movies by popularity descending
router.get("/trending/:page", movieController.getTrending);
//Fetch movies by rating descending
router.get("/top-rate/:page", movieController.getTopRated);

module.exports = router;
