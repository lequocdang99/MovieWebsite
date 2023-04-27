const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const movieRoutes = require("./routes/movie");
const genreRoutes = require("./routes/genre");
const videoRoutes = require("./routes/video");
const searchRoutes = require("./routes/search");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/movies", movieRoutes);
app.use("/api/movies/discover", genreRoutes);
app.use("/api/movies/video", videoRoutes);
app.use("/api/search", searchRoutes);
//Route not found
app.use("*", function (req, res, next) {
  res.status(404).json({ message: "Route not found" });
});

app.listen(5000);
