import React, { useState } from "react";

import ResultList from "./ResultList";
import classes from "./SearchForm.module.css";

const SearchForm = () => {
  //State của input
  const [input, setInput] = useState("");
  //Hàm search
  const searchHandler = (event) => {
    event.preventDefault();
    //Search input value
    const keywords = event.target.elements.keywords.value;
    const genreId = event.target.elements.genre.value;
    const mediaType = event.target.elements.mediaType.value;
    const languageId = event.target.elements.language.value;
    const year = event.target.elements.year.value;
    setInput({
      keywords: keywords,
      genreId: genreId,
      mediaType: mediaType,
      languageId: languageId,
      year: year,
    });
  };
  //Reset function
  const resetHandler = () => {
    setInput("");
  };
  // Get the current year
  const currentYear = new Date().getFullYear();
  // Generate a list of options for the year dropdown
  const years = [];
  for (let year = currentYear; year >= 1900; year--) {
    years.push(year);
  }

  return (
    <>
      <div className={classes.form}>
        <form onSubmit={searchHandler}>
          <input
            type='text'
            className={classes.form_input}
            id='keywords'
          ></input>
          <svg
            className='svg-inline--fa fa-search fa-w-16'
            fill='#ccc'
            aria-hidden='true'
            data-prefix='fas'
            data-icon='search'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'></path>
          </svg>
          <div className={classes.options}>
            <select
              id='genre'
              name='genre'
              className={classes.form_input}
            >
              <option value=''>Genre</option>
              <option value={28}>Action</option>
              <option value={12}>Adventure</option>
              <option value={16}>Animation</option>
              <option value={35}>Comedy</option>
              <option value={80}>Crime</option>
              <option value={99}>Documentary</option>
              <option value={18}>Drama</option>
              <option value={10751}>Family</option>
              <option value={14}>Fantasy</option>
              <option value={36}>History</option>
              <option value={27}>Horror</option>
              <option value={10749}>Music</option>
              <option value={9648}>Mystery</option>
              <option value={10749}>Romance</option>
              <option value={878}>Science Fiction</option>
              <option value={10770}>TV Movie</option>
              <option value={53}>Thriller</option>
              <option value={10752}>War</option>
              <option value={37}>Western</option>
            </select>
            <select
              id='mediaType'
              name='mediaType'
              className={classes.form_input}
            >
              <option value=''>Media type</option>
              <option value='all'>All</option>
              <option value='movie'>Movie</option>
              <option value='tv'>TV</option>
            </select>
            <select
              id='language'
              name='language'
              className={classes.form_input}
            >
              <option value=''>Language</option>
              <option value='af'>Afrikaans</option>
              <option value='sq'>Albanian</option>
              <option value='ar'>Arabic</option>
              <option value='hy'>Armenian</option>
              <option value='az'>Azeric (Latin)</option>
              <option value='eu'>Basque</option>
              <option value='be'>Belarusian</option>
              <option value='bg'>Bulgarian</option>
              <option value='ca'>Catalan</option>
              <option value='zh'>Chinese</option>
              <option value='hr'>Croatian</option>
              <option value='cs'>Czech</option>
              <option value='dv'>Danish</option>
              <option value='da'>Divehi</option>
              <option value='nl'>Dutch</option>
              <option value='en'>English</option>
              <option value='eo'>Esperanto</option>
              <option value='et'>Estonian</option>
              <option value='fo'>Faroese</option>
              <option value='fa'>Farsi</option>
              <option value='fi'>Finnish</option>
              <option value='fr'>French</option>
              <option value='gl'>Galician</option>
              <option value='ka'>Georgian</option>
              <option value='de'>German</option>
              <option value='el'>Greek</option>
              <option value='gu'>Gujarati</option>
              <option value='he'>Hebrew</option>
              <option value='hi'>Hindi</option>
              <option value='hu'>Hungarian</option>
              <option value='is'>Icelandic</option>
              <option value='id'>Indonesian</option>
              <option value='it'>Italian</option>
              <option value='ja'>Japanese</option>
              <option value='ka'>Kannada</option>
              <option value='kk'>Kazakh</option>
              <option value='kok'>Konkani</option>
              <option value='ko'>Korean</option>
              <option value='ky'>Kyrgyz</option>
              <option value='lv'>Latvian</option>
              <option value='lt'>Lithuanian</option>
              <option value='mk'>Macedonian</option>
              <option value='ms'>Malay</option>
              <option value='mt'>Maltese</option>
              <option value='mi'>Maori</option>
              <option value='mr'>Marathi</option>
              <option value='mn'>Mongolian</option>
              <option value='ns'>Northern Sotho</option>
              <option value='nb'>Norwegian</option>
              <option value='ps'>Pashto</option>
              <option value='pl'>Polish</option>
              <option value='pt'>Portugese</option>
              <option value='pa'>Punjabi</option>
              <option value='qu'>Quechua</option>
              <option value='ro'>Romanian</option>
              <option value='ru'>Russian</option>
              <option value='se'>Sami</option>
              <option value='sa'>Sanskrit</option>
              <option value='sk'>Slovak</option>
              <option value='sl'>Slovenian</option>
              <option value='es'>Spanish</option>
              <option value='syr'>Syriac</option>
              <option value='sw'>Swahili</option>
              <option value='sv'>Swedish</option>
              <option value='ta'>Tamil</option>
              <option value='tl'>Tagalog</option>
              <option value='tt'>Tatar</option>
              <option value='th'>Thai</option>
              <option value='te'>Telugu</option>
              <option value='ts'>Tsonga</option>
              <option value='tn'>Tswana</option>
              <option value='tr'>Turkish</option>
              <option value='uk'>Ukrainian</option>
              <option value='ur'>Urdu</option>
              <option value='uz'>Uzbek</option>
              <option value='vi'>Vietnamese</option>
              <option value='cy'>Welsh</option>
              <option value='xh'>Xhosa</option>
              <option value='zu'>Zulu</option>
            </select>
            <select
              id='year'
              name='year'
              className={classes.form_input}
            >
              <option value=''>Year</option>
              {years.map((year) => (
                <option
                  key={year}
                  value={year}
                >
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className={classes.button}>
            <button
              type='submit'
              id={classes.button_search}
            >
              SEARCH
            </button>
            <button
              type='reset'
              id={classes.button_reset}
              onClick={resetHandler}
            >
              RESET
            </button>
          </div>
        </form>
      </div>
      {input && (
        <ResultList
          keywords={input.keywords}
          genreId={input.genreId}
          mediaType={input.mediaType}
          languageId={input.languageId}
          year={input.year}
        />
      )}
    </>
  );
};

export default SearchForm;
