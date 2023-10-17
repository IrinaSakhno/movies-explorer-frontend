import React from "react";
import { useState, useMemo, useCallback } from "react";
import "./SavedMovies.css";
import Footer from "../Footer/Footer";
import HeaderAuthorized from "../HeaderAuthorized/HeaderAuthorized";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

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
        ? movie.duration < 40 && filtredMovieInclude
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
