import React, { useState, useEffect } from "react";

import MovieDetail from "../browse/MovieDetail";
import classes from "./ResultList.module.css";

const ResultList = ({ keywords, genreId, mediaType, languageId, year }) => {
  //User ID
  const userId = "User 01";
  const token = "8qlOkxz4wq";
  //State của result list
  const [result, setResult] = useState([]);
  //State của movie detail
  const [showMovieDetail, setShowMovieDetail] = useState(false);
  const [movieDetail, setMovieDetail] = useState([]);

  //Fetch result from movie list data
  const fetchResult = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/search?userId=${userId}&token=${token}`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            keywords: keywords,
            genreId: genreId,
            mediaType: mediaType,
            languageId: languageId,
            year: year,
          }),
        }
      );
      const data = await response.json();
      data.result
        ? //Check data có trả về kết quả không
          setResult(data.result)
        : //Wrong route endpoint
          console.log(data.message);
    } catch (err) {
      throw new Error(err);
    }
  };
  useEffect(() => {
    setShowMovieDetail(false);
    fetchResult();
  }, [keywords, genreId, mediaType, languageId, year]);

  //Hàm hiển thị movie detail
  const showMovieDetailHandler = (detail) => {
    //Click lần đầu
    if (movieDetail.length === 0) {
      setMovieDetail(detail);
      setShowMovieDetail((prevShowMovieDetail) => !prevShowMovieDetail);
    } else {
      //Click lại vào phim đã click
      if (detail.id === movieDetail.id) {
        setShowMovieDetail((prevShowMovieDetail) => !prevShowMovieDetail);
      }
      //Click phim khác
      if (detail.id !== movieDetail.id) {
        if (showMovieDetail) {
          setMovieDetail(detail);
        } else {
          setMovieDetail(detail);
          setShowMovieDetail((prevShowMovieDetail) => !prevShowMovieDetail);
        }
      }
    }
  };

  return (
    <div className={classes.result}>
      <h2>Search Result</h2>
      {result.map((movie) => {
        return (
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.name}
            key={movie.id}
            className={classes.result_poster}
            onClick={() => {
              showMovieDetailHandler(movie);
            }}
          ></img>
        );
      })}
      {showMovieDetail && (
        <MovieDetail
          name={movieDetail.name ? movieDetail.name : movieDetail.title}
          releaseDate={
            movieDetail.first_air_date
              ? movieDetail.first_air_date
              : movieDetail.release_date
          }
          vote={movieDetail.vote_average}
          overview={movieDetail.overview}
          backdrop_path={movieDetail.backdrop_path}
          id={movieDetail.id}
        />
      )}
    </div>
  );
};

export default ResultList;
