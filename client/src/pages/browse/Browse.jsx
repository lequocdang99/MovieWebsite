import React from "react";

import Banner from "./Banner";
import MovieList from "./MovieList";
import NavBar from "./NavBar";

function Browse() {
  return (
    <div className='app'>
      <NavBar />
      <Banner />
      <MovieList category='' />
      <MovieList category='trending' />
      <MovieList category='top-rate' />
      <MovieList category='discover/28' />
      <MovieList category='discover/35' />
      <MovieList category='discover/27' />
      <MovieList category='discover/10749' />
      <MovieList category='discover/99' />
    </div>
  );
}

export default Browse;
