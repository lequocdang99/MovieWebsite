import React, { useState, useEffect } from "react";

import classes from "./Banner.module.css";

const Banner = () => {
  //Page number
  let page = 1;
  //User ID
  const userId = "User 01";
  const token = "8qlOkxz4wq";
  //State banner
  const [movie, setMovie] = useState([]);
  //Fetch banner
  const fetchBanner = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/movies/${page}?userId=${userId}&token=${token}`
      );
      const data = await response.json();
      //Lấy ngẫu nhiên 1 phim
      if (data.results) {
        const randomMovie = await data.results[
          Math.floor(Math.random() * data.results.length - 1)
        ];
        setMovie(randomMovie);
      } else {
        //Wrong route endpoint
        console.log(data.message);
      }
    } catch (error) {
      //Catch error
      throw new Error(error.message);
    }
  };
  useEffect(() => {
    fetchBanner();
  }, []);

  return (
    <div className={classes.banner}>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.name}
        className={classes.banner_background}
      ></img>
      <h1 className={classes.banner_title}>{movie.title || movie.name}</h1>
      <div className={classes.banner_button}>
        <button type='button'>Play</button>
        <button type='button'>My List</button>
      </div>
      <p className={classes.banner_overview}>{movie.overview}</p>
    </div>
  );
};
export default Banner;
