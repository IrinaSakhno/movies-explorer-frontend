import "./MoviesCardList.css";
import MovieCard from "../MovieCard/MovieCard";
import Preloader from "../Preloader/Preloader";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const MoviesCardList = ({
  isLoading,
  savedMovies,
  onSave,
  onDelete,
  movies,
  filteredMovies,
  isConnectionError,
}) => {
  const { path } = useLocation();

  const cards = path === "/movies" ? movies : filteredMovies;

  const [paginate, setPaginate] = useState(0);
  const [moreButton, setMoreButton] = useState(false);

  const changePaginate = () => {
    if (window.innerWidth < 751) {
      setPaginate(5);
      return;
    } else if (window.innerWidth > 752 && window.innerWidth < 1191) {
      setPaginate(8);
      return;
    } else {
      setPaginate(12);
      return;
    }
  };

  const onMore = () => {
    if (window.innerWidth >= 1191) return setPaginate(paginate + 3);
    else if (window.innerWidth < 1191) return setPaginate(paginate + 2);
  };

  useEffect(() => {
    changePaginate();
  }, []);

  useEffect(() => {
    if (cards.length === 0) {
      setMoreButton(false);
    }
    if (paginate >= cards.length) {
      setMoreButton(false);
    } else {
      return setMoreButton(true);
    }
  }, [cards, paginate]);

  return (
    <section className="movies-list">
      {isConnectionError && (
        <p className="movies-list__connection-error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      )}

      {isLoading && <Preloader />}

      {!isConnectionError && (
        <>
          {cards.length === 0 ? (
            <p className="movies__no-result">Ничего не найдено</p>
          ) : (
            <ul className="movies-list__list">
              {cards.slice(0, paginate).map((card) => (
                <MovieCard
                  movieCard={card}
                  onSave={onSave}
                  onDelete={onDelete}
                  savedMovies={savedMovies}
                  filtredMovies={filteredMovies}
                  key={card.id || card.movieId}
                />
              ))}
            </ul>
          )}
        </>
      )}

      <div className="movies__more-button-container">
        {moreButton && (
          <button
            className="movies-list__button link"
            type="button"
            onClick={onMore}
          >
            Еще
          </button>
        )}
      </div>
    </section>
  );
};

export default MoviesCardList;
