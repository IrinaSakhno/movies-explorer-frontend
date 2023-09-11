import "./MoviesCardList.css";
import MovieCard from "../MovieCard/MovieCard";

const MoviesCardList = () => {
  return (
    <section className="movies-list">
      <ul className="movies-list__list">
        <MovieCard title="В погоне за Бенкси" length="27" link="https://www.youtube.com/watch?v=K521T9HmGyM" altDescription="Девушка у автомобиля" />
        <MovieCard title="В погоне за Бенкси" length="27" link="https://www.youtube.com/watch?v=K521T9HmGyM" altDescription="Девушка у автомобиля" />
        <MovieCard title="В погоне за Бенкси" length="27" link="https://www.youtube.com/watch?v=K521T9HmGyM" altDescription="Девушка у автомобиля" />
        <MovieCard title="В погоне за Бенкси" length="27" link="https://www.youtube.com/watch?v=K521T9HmGyM" altDescription="Девушка у автомобиля" />
        <MovieCard title="В погоне за Бенкси" length="27" link="https://www.youtube.com/watch?v=K521T9HmGyM" altDescription="Девушка у автомобиля" />
        <MovieCard title="В погоне за Бенкси" length="27" link="https://www.youtube.com/watch?v=K521T9HmGyM" altDescription="Девушка у автомобиля" />
        <MovieCard title="В погоне за Бенкси" length="27" link="https://www.youtube.com/watch?v=K521T9HmGyM" altDescription="Девушка у автомобиля" />
        <MovieCard title="В погоне за Бенкси" length="27" link="https://www.youtube.com/watch?v=K521T9HmGyM" altDescription="Девушка у автомобиля" />
        <MovieCard title="В погоне за Бенкси" length="27" link="https://www.youtube.com/watch?v=K521T9HmGyM" altDescription="Девушка у автомобиля" />
        <MovieCard title="В погоне за Бенкси" length="27" link="https://www.youtube.com/watch?v=K521T9HmGyM" altDescription="Девушка у автомобиля" />
        <MovieCard title="В погоне за Бенкси" length="27" link="https://www.youtube.com/watch?v=K521T9HmGyM" altDescription="Девушка у автомобиля" />
        <MovieCard title="В погоне за Бенкси" length="27" link="https://www.youtube.com/watch?v=K521T9HmGyM" altDescription="Девушка у автомобиля" />
      </ul>
      <button className="movies-list__button link" type="button">
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;
