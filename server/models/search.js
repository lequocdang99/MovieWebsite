const fs = require("fs");
const path = require("path");

//Path của movie data
const DATA_PATH = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "movieList.json"
);

//Đọc file json
const SearchList = {
  //Read movie list file
  all: function () {
    return JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
  },
  search: function (keywords, genreId, mediaType, languageId, year) {
    let movieArr = SearchList.all();
    //Search movie keywords
    if (keywords.length > 0) {
      movieArr = movieArr.filter((movie) => {
        return (
          movie[movie.title ? `title` : `name`]
            .toUpperCase()
            .includes(keywords.toUpperCase()) ||
          movie.overview.toUpperCase().includes(keywords.toUpperCase())
        );
      });
    }
    //Search movie genres
    if (genreId.length > 0) {
      movieArr = movieArr.filter((movie) => {
        return movie.genre_ids.includes(Number(genreId));
      });
    }
    //Search movie media type
    if (mediaType.length > 0 && mediaType !== "all") {
      movieArr = movieArr.filter((movie) => {
        return movie.media_type === mediaType;
      });
    }
    //Search movie language
    if (languageId.length > 0) {
      movieArr = movieArr.filter((movie) => {
        return movie.original_language === languageId;
      });
    }
    //Search movie year
    if (year.length > 0) {
      movieArr = movieArr.filter((movie) => {
        const dateKey = movie.first_air_date
          ? "first_air_date"
          : "release_date";
        const dateValue = movie[dateKey];
        if (dateValue && dateValue.length >= 4) {
          return dateValue.slice(0, 4) === year.toString();
        }
      });
    }
    return movieArr.slice(0, 20);
  },
};

module.exports = SearchList;
