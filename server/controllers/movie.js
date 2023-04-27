const Movies = require("../models/movie");
const Token = require("../models/token");

exports.getMovies = (req, res, next) => {
  try {
    const page = req.params.page;
    const userId = req.query.userId;
    const token = req.query.token;
    const tokenAuth = Token.authenticate(userId, token);
    const moviesList = Movies.fetchMovieList();
    //Authentication
    if (!tokenAuth) {
      res.status(401).json({ error: "Unauthenticated" });
      next();
    }
    if (tokenAuth) {
      res.status(200).json({
        results: moviesList,
        page: page,
        total_pages: moviesList.length / 20,
      });
      next();
    }
  } catch (err) {
    throw new Error(err);
  }
};

exports.getTrending = (req, res, next) => {
  try {
    const page = req.params.page;
    const moviesTrending = Movies.fetchTrending();
    const userId = req.query.userId;
    const token = req.query.token;
    const tokenAuth = Token.authenticate(userId, token);
    //Authentication
    if (!tokenAuth) {
      res.status(401).json({ error: "Unauthenticated" });
      next();
    }
    if (tokenAuth) {
      res.status(200).json({
        results: moviesTrending,
        page: page,
        total_pages: moviesTrending.length / 20,
      });
      next();
    }
  } catch (err) {
    throw new Error(err);
  }
};

exports.getTopRated = (req, res, next) => {
  try {
    const page = req.params.page;
    const moviesTopRated = Movies.fetchTopRated();
    const userId = req.query.userId;
    const token = req.query.token;
    const tokenAuth = Token.authenticate(userId, token);
    //Authentication
    if (!tokenAuth) {
      res.status(401).json({ error: "Unauthenticated" });
      next();
    }
    if (tokenAuth) {
      res.status(200).json({
        results: moviesTopRated,
        page: page,
        total_pages: moviesTopRated.length / 20,
      });
      next();
    }
  } catch (err) {
    throw new Error(err);
  }
};
