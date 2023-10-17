import React from "react";
import { useState } from "react";
import "./Movies.css";
import Footer from "../Footer/Footer";
import HeaderAuthorized from "../HeaderAuthorized/HeaderAuthorized";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = ({
  savedMovies,
  moviesList,
  isLoading,
  onDelete,
  onSave,
  isConnectionError,
}) => {
  const [isShort, setIsShort] = useState(
    localStorage.getItem("isShort") === "true",
  );

  const [search, setSearch] = useState(localStorage.getItem("search") || "");
  const [isSearchStarted, setIsSearchStarted] = useState(
    localStorage.getItem("isSearchStarted"),
  );

  const [filteredMovies, setFilteredMovies] = useState(
    localStorage.getItem("filteredMovies")
      ? JSON.parse(localStorage.getItem("filteredMovies"))
      : [],
  );

  function handleSearchSubmit(isShort) {
    const movies = moviesList.filter((movie) => {
      const filteredMovieInclude =
        movie.nameRU.toLowerCase().includes(search.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(search.toLowerCase());
      return isShort
        ? movie.duration < 40 && filteredMovieInclude
        : filteredMovieInclude;
    });

    setFilteredMovies(movies);
    localStorage.setItem("isShort", isShort);
    localStorage.setItem("filteredMovies", JSON.stringify(movies));
    localStorage.setItem("search", search);
    setIsSearchStarted(true);
    localStorage.setItem("isSearchStarted", true);
  }

  return (
    <>
      <HeaderAuthorized />
      <main className="movies">
        <SearchForm
          search={search}
          setSearch={setSearch}
          onSearch={handleSearchSubmit}
          isShort={isShort}
          setIsShort={setIsShort}
          isSearchStarted={isSearchStarted}
        />
        {isSearchStarted && (
          <MoviesCardList
            isLoading={isLoading}
            savedMovies={savedMovies}
            onSave={onSave}
            onDelete={onDelete}
            movies={filteredMovies}
            filteredMovies={filteredMovies}
            isConnectionError={isConnectionError}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Movies;
