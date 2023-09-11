import "./SearchForm.css";
import ToggleButton from "../ToggleButton/ToggleButton";

const SearchForm = () => {
  return (
    <section className="search">
      <form className="search__form-container">
        <div className="search__form">
          <input
            type="text"
            className="search__form-field"
            placeholder="Фильм"
            name="movie"
            minLength="2"
            maxLength="40"
            required
          />
          <button type="button" className="search__submit-button link">
            Поиск
          </button>
        </div>
        <div className="search__short-movie">
          <ToggleButton label="Короткометражки" />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
