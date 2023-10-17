import "./MovieCard.css";
import { MOVIE_IMAGE_URL } from "../../constants/urls";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import { useMemo } from "react";

const MovieCard = ({ movieCard, onSave, onDelete, savedMovies }) => {
  const path = useLocation();

  const isLiked = useMemo(() => {
    if (path.pathname === "/movies") {
      return savedMovies.some((m) => m.movieId === movieCard.id.toString());
    }
    return false;
  }, [movieCard, savedMovies]);

  const handleSave = () => {
    !isLiked ? onSave(movieCard) : onDelete(movieCard);
  };

  const handleDelete = () => {
    return onDelete(movieCard);
  };

  const convertTime = (length) => {
    if (length >= 60) {
      return `${Math.floor(length / 60)} ч ${length % 60} мин`;
    }
    return `${length}м`;
  };

  return (
    <li className="movie">
      <div className="movie__about">
        <a
          className="movie__link"
          href={movieCard.trailerLink}
          rel="noreferrer"
        >
          <h2 className="movie__title link">
            {movieCard.nameRU || movieCard.nameEN}
          </h2>
        </a>
        <p className="movie__length">{convertTime(movieCard.duration)}</p>
      </div>
      <a className="movie__link" href={movieCard.trailerLink} rel="noreferrer">
        <img
          className="movie__screenshot link"
          src={
            movieCard.image.url
              ? `${MOVIE_IMAGE_URL}${movieCard.image.url}`
              : movieCard.image
          }
          alt={movieCard.nameRU || movieCard.nameEN}
        />
      </a>
      {path.pathname === "/saved-movies" ? (
        <button
          className="movie__button movie__button_delete link"
          type="button"
          onClick={handleDelete}
        />
      ) : (
        <button
          className={classNames(
            "movie__button",
            "link",
            isLiked ? "movie__button_saved" : "movie__button_save",
          )}
          type="button"
          onClick={isLiked ? handleDelete : handleSave}
        />
      )}
    </li>
  );
};

export default MovieCard;
