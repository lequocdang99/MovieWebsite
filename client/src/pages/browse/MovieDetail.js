import React, { useEffect, useState } from "react";

import YouTube from "react-youtube";
import classes from "./MovieDetail.module.css";

const MovieDetail = ({
  name,
  releaseDate,
  vote,
  overview,
  backdrop_path,
  id,
}) => {
  //User ID
  const userId = "User 01";
  const token = "8qlOkxz4wq";
  //State của trailer phim
  const [movieVideoDetail, setMovieVideoDetail] = useState([]);
  //Fetch movie details
  const fetchVideoDetail = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/movies/video?userId=${userId}&token=${token}`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ film_id: id }),
        }
      );
      const data = await response.json();
      response.status === 200
        ? setMovieVideoDetail(data)
        : console.log(data.message);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchVideoDetail();
  }, [id]);

  //Thiết lập cho Youtube iframe
  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className={classes.detail}>
      <div className={classes.detail_text}>
        <h3>{name}</h3>
        <hr></hr>
        <h4>Release Date: {releaseDate}</h4>
        <h4>Vote: {vote} / 10</h4>
        <p>{overview}</p>
      </div>
      <div
        className={
          movieVideoDetail.id ? classes.detail_video : classes.detail_img
        } //Class của video hoặc backdrop
      >
        {movieVideoDetail.id ? (
          <YouTube
            videoId={movieVideoDetail.key}
            opts={opts}
          />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt={movieVideoDetail}
          ></img>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
