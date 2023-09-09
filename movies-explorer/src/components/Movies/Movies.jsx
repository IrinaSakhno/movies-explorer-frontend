import React from "react";

import "./Movies.css";
import Footer from "../Footer/Footer";
import HeaderAuthorized from "../HeaderAuthorized/HeaderAuthorized";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = () => {
  return (
    <>
      <HeaderAuthorized />
      <main className="movies">
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
