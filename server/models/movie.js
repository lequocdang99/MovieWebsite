const fs = require("fs");
const path = require("path");

//Path của movie data
const DATA_PATH = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "movieList.json"
);

//Đọc file json
const Movies = {
  all: function () {
    return JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
  },
  fetchMovieList: function () {
    //Lấy 20 phim
    return Movies.all().slice(0, 20);
  },
  fetchTrending: function () {
    return (
      Movies.all()
        //Sắp xếp theo popularity
        .sort(function (a, b) {
          let left = a.popularity;
          let right = b.popularity;
          return left === right ? 0 : left < right ? 1 : -1;
        })
        //Lấy 20 phim
        .slice(0, 20)
    );
  },
  fetchTopRated: function () {
    return (
      Movies.all()
        //Sắp xếp theo popularity
        .sort(function (a, b) {
          let left = a.vote_average;
          let right = b.vote_average;
          return left === right ? 0 : left < right ? 1 : -1;
        })
        //Lấy 20 phim
        .slice(0, 20)
    );
  },
  findByGenre: function (genreId) {
    return Movies.all()
      .filter((movie) => movie.genre_ids.includes(parseInt(genreId)))
      .slice(0, 20);
  },
};

module.exports = Movies;
