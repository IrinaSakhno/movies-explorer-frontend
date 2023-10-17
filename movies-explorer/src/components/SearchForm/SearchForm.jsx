import React from "react";
import "./SearchForm.css";
import ToggleButton from "../ToggleButton/ToggleButton";
import { useState } from "react";

const SearchForm = ({ search, setSearch, onSearch, isShort, setIsShort }) => {
  const [isEmptySearch, setIsEmptySearch] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCheckbox = () => {
    onSearch(!isShort);
    setIsShort(!isShort);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!e.target.movie.value.trim()) {
      return setIsEmptySearch(true);
    }
    setIsEmptySearch(false);
    onSearch(isShort);
  };

  return (
    <section className="search">
      <form
        className="search__form-container"
        onSubmit={handleFormSubmit}
        noValidate
      >
        <div className="search__form">
          <input
            type="text"
            className="search__form-field"
            placeholder="Фильм"
            name="movie"
            minLength="2"
            maxLength="40"
            onChange={handleChange}
            value={search.text}
            required
          />
          <button className="search__submit-button link">Поиск</button>
        </div>
        <div className="search__short-movie">
          <ToggleButton
            label="Короткометражки"
            handleCheckbox={handleCheckbox}
            isShort={isShort}
          />
        </div>
        {isEmptySearch && (
          <p className="search__error">Нужно ввести ключевое слово</p>
        )}
      </form>
    </section>
  );
};

export default SearchForm;
