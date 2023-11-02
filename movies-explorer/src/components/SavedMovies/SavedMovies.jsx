import React from "react";
import { useState, useMemo, useCallback } from "react";
import "./SavedMovies.css";
import Footer from "../Footer/Footer";
import HeaderAuthorized from "../HeaderAuthorized/HeaderAuthorized";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { SHORT_MOVIE_DURATION } from "../../constants/movies";

const SavedMovies = ({
  savedMoviesList,
  isLoading,
  onDelete,
  onSave,
  isConnectionError,
}) => {
  const [isShort, setIsShort] = useState(false);

  const [search, setSearch] = useState("");

  const [filterString, setFilterString] = useState("");

  const handleSearchSubmit = useCallback(async () => {
    setFilterString(search);
  }, [search]);

  const filteredMovies = useMemo(() => {
    return savedMoviesList.filter((movie) => {
      const filtredMovieInclude =
        movie.nameRU.toLowerCase().includes(filterString.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(filterString.toLowerCase());
      return isShort
        ? movie.duration < SHORT_MOVIE_DURATION && filtredMovieInclude
        : filtredMovieInclude;
    });
  }, [filterString, isShort, savedMoviesList]);

  return (
    <>
      <HeaderAuthorized />
      <main className="saved-movies">
        <SearchForm
          search={search}
          setSearch={setSearch}
          onSearch={handleSearchSubmit}
          isShort={isShort}
          setIsShort={setIsShort}
        />

        <MoviesCardList
          isLoading={isLoading}
          savedMovies={savedMoviesList}
          onSave={onSave}
          onDelete={onDelete}
          movies={filteredMovies}
          filteredMovies={filteredMovies}
          isConnectionError={isConnectionError}
        />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
