const GenreList = require("../models/genre");
const MovieList = require("../models/movie");
const Token = require("../models/token");

exports.getGenre = (req, res, next) => {
  try {
    const page = req.params.page;
    const genreId = req.params.genreId;
    const genre = GenreList.findById(genreId);
    const genreList = MovieList.findByGenre(genreId);
    const userId = req.query.userId;
    const token = req.query.token;
    const tokenAuth = Token.authenticate(userId, token);
    //Authentication
    if (!tokenAuth) {
      res.status(401).json({ error: "Unauthenticated" });
      next();
    }
    if (tokenAuth) {
      if (!genreId) {
        res.status(400).json({ error: "Not found genre param" });
        next();
      }
      if (genreList.length === 0) {
        res.status(400).json({ error: "Not found that genre id" });
        next();
      } else {
        res.status(200).json({
          results: genreList,
          page: page,
          total_pages: 63,
          genre_name: genre,
        });
        next();
      }
    }
  } catch (err) {
    throw new Error(err);
  }
};
