import "./MoviesCardList.css";
import MovieCard from "../MovieCard/MovieCard";

const MoviesCardList = () => {
  return (
    <section className="movies-list">
      <ul className="movies-list__list">
        <MovieCard title="В погоне за Бенкси" length="27"/>
        <MovieCard title="В погоне за Бенкси" length="27"/>
        <MovieCard title="В погоне за Бенкси" length="27"/>
        <MovieCard title="В погоне за Бенкси" length="27"/>
        <MovieCard title="В погоне за Бенкси" length="27"/>
        <MovieCard title="В погоне за Бенкси" length="27"/>

        
      </ul>
      <button
          className="movies-list__button link"
          type="button"
        >
          Ещё
        </button>
    </section>
  );
};

export default MoviesCardList;
