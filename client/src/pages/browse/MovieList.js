import React, { useState, useEffect } from "react";

import MovieDetail from "./MovieDetail";
import classes from "./MovieList.module.css";

const MovieList = (props) => {
  //Page number
  let page = 1;
  //User ID
  const userId = "User 01";
  const token = "8qlOkxz4wq";
  //State của movie list
  const [movies, setMovies] = useState([]);
  //State của movie detail
  const [showMovieDetail, setShowMovieDetail] = useState(false); //Hiện hoặc ẩn
  const [movieDetail, setMovieDetail] = useState([]);

  //Fetch banner
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/movies/${props.category}/${page}?userId=${userId}&token=${token}`
      );
      const data = await response.json();
      data.results ? setMovies(data.results) : console.log(data.message);
    } catch (error) {
      //Catch error
      throw new Error(error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, [page, props.category]);

  //Function show movie detail
  const showMovieDetailHandler = (movie) => {
    //First click
    if (movieDetail.length === 0) {
      setMovieDetail(movie);
      setShowMovieDetail((prevShowMovieDetail) => !prevShowMovieDetail);
    } else {
      //Already showing
      if (movie.id === movieDetail.id) {
        setShowMovieDetail((prevShowMovieDetail) => !prevShowMovieDetail);
      }
      //Other movie
      else {
        if (showMovieDetail) {
          setMovieDetail(movie);
        } else {
          setMovieDetail(movie);
          setShowMovieDetail((prevShowMovieDetail) => !prevShowMovieDetail);
        }
      }
    }
  };

  return (
    <>
      <div className={classes.list_title}>
        {props.category === "trending" && <h2>Xu Hướng</h2>}
        {props.category === "top-rate" && <h2>Xếp Hạng Cao</h2>}
        {props.category === "discover/28" && <h2>Hành Động</h2>}
        {props.category === "discover/35" && <h2>Hài</h2>}
        {props.category === "discover/27" && <h2>Kinh Dị</h2>}
        {props.category === "discover/10749" && <h2>Lãng Mạn</h2>}
        {props.category === "discover/99" && <h2>Tài Liệu</h2>}
      </div>
      <div className={classes.list}>
        {movies &&
          movies.map((movie) => {
            return (
              <img
                src={
                  !props.category
                    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                    : `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                }
                alt={movie.name}
                className={
                  !props.category
                    ? classes.list_image
                    : classes.list_image_poster
                }
                key={movie.id}
                onClick={() => {
                  showMovieDetailHandler(movie);
                }}
              ></img>
            );
          })}
      </div>
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
    </>
  );
};

export default MovieList;
