const fs = require("fs");
const path = require("path");

const DATA_PATH = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "videoList.json"
);

const Videos = {
  //Read all from video list
  all: function () {
    return JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
  },
  //Find video by id
  findById: function (filmId) {
    const movieVideoAll = Videos.all().filter((video) => video.id === filmId);
    if (movieVideoAll.length > 0) {
      return (
        movieVideoAll[0].videos
          //Lọc theo criteria
          .filter((video) => {
            if (
              video.official === true &&
              video.site === "YouTube" &&
              video.type === "Trailer"
            ) {
              return video;
            }
          })
          //Lấy ngày gần nhất
          .sort((a, b) => a.published_at - b.published_at)[0]
      );
    }
    return [];
  },
};

module.exports = Videos;
