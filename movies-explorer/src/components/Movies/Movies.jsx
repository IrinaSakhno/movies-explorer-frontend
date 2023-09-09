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
      <section className="movies">
        <SearchForm />
        <MoviesCardList />
      </section>
      <Footer />
    </>
  );
};

export default Movies;
