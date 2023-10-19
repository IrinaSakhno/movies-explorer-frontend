import "./MoviesCardList.css";
import MovieCard from "../MovieCard/MovieCard";
import Preloader from "../Preloader/Preloader";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import {
  RENDER_MOVIES_BIG_SCREEN,
  RENDER_MOVIES_MIDDLE_SCREEN,
  RENDER_MOVIES_SMALL_SCREEN,
  MORE_MOVIES_BIG_SCREEN,
  MORE_MOVIES_MIDDLE_SCREEN,
  MORE_MOVIES_SMALL_SCREEN,
  SCREEN_BREAKPOINT_MAX,
  SCREEN_BREAKPOINT_MIDDLE,
  SCREEN_BREAKPOINT_MIN
} from "../../constants/movies";

const MoviesCardList = ({
  isLoading,
  savedMovies,
  onSave,
  onDelete,
  movies,
  filteredMovies,
  isConnectionError,
}) => {
  const path = useLocation();

  const cards = path.pathname === "/movies" ? movies : filteredMovies;
  const savedMoviesPath = path.pathname === "/saved-movies";

  const [paginate, setPaginate] = useState(0);
  const [moreButton, setMoreButton] = useState(false);

  const changePaginate = useCallback(() => {
    if (savedMoviesPath) {
      setPaginate(Number.MAX_VALUE);
      return;
    }

    if (window.innerWidth < SCREEN_BREAKPOINT_MIN) {
      !savedMoviesPath && setPaginate(RENDER_MOVIES_SMALL_SCREEN);
      return;
    } else if (window.innerWidth > SCREEN_BREAKPOINT_MIDDLE && window.innerWidth < SCREEN_BREAKPOINT_MAX) {
      !savedMoviesPath && setPaginate(RENDER_MOVIES_MIDDLE_SCREEN);
      return;
    } else {
      !savedMoviesPath && setPaginate(RENDER_MOVIES_BIG_SCREEN);
      return;
    }
  }, [setPaginate, savedMoviesPath]);

  const onMore = () => {
    if (window.innerWidth < SCREEN_BREAKPOINT_MIN) { 
      return setPaginate(paginate + MORE_MOVIES_SMALL_SCREEN);
    } else if (window.innerWidth > SCREEN_BREAKPOINT_MIDDLE
       && window.innerWidth < SCREEN_BREAKPOINT_MAX) {
      return setPaginate(paginate + MORE_MOVIES_MIDDLE_SCREEN);
    } else {
      return setPaginate(paginate + MORE_MOVIES_BIG_SCREEN);
    }
  };

  useEffect(() => {
    changePaginate();
  }, [changePaginate, filteredMovies]);

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

      {!isConnectionError && !isLoading && (
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
    {!isLoading && 
          <div className="movies__more-button-container">
          {path.pathname === "/movies" && moreButton && (
            <button
              className="movies-list__button link"
              type="button"
              onClick={onMore}
            >
              Еще
            </button>
          )}
        </div>
    }

    </section>
  );
};

export default MoviesCardList;
