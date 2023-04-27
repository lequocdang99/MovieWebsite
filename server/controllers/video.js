const Videos = require("../models/video");
const Token = require("../models/token");

exports.getVideos = (req, res, next) => {
  try {
    const movieId = req.body.film_id;
    const video = Videos.findById(movieId);
    const userId = req.query.userId;
    const token = req.query.token;
    const tokenAuth = Token.authenticate(userId, token);
    //Authentication
    if (!tokenAuth) {
      res.status(401).json({ error: "Unauthenticated" });
      next();
    }
    if (tokenAuth) {
      //No film id provided
      if (!movieId) {
        res.status(400).json({ error: "Not found film param" });
        next();
      }
      //No video found
      if (!video) {
        res.status(404).json({ error: "Not found video" });
        next();
      } else {
        res.status(200).json(video);
        next();
      }
    }
  } catch (err) {
    throw new Error(err);
  }
};
