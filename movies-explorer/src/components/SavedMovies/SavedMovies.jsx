import React from "react";
import "./SavedMovies.css";
import Footer from "../Footer/Footer";
import HeaderAuthorized from "../HeaderAuthorized/HeaderAuthorized";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const SavedMovies = () => {
  return (
    <>
      <HeaderAuthorized />
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
