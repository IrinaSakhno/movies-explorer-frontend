import "./SearchForm.css";
import ToggleButton from "../ToggleButton/ToggleButton";

const SearchForm = () => {
  return (
    <section className="search">
      <form className="search__form">
        <input
          type="text"
          className="search__form-field"
          placeholder="Фильм"
          name="movie"
          required
        />
        <button type="submit" className="search__submit-button link">
          Поиск
        </button>
      </form>
      <div className="search__short-movie">
        <ToggleButton label="Короткометражки" />
      </div>
    </section>
  );
};

export default SearchForm;
