import "./MovieCard.css";
import MoviePicture from "../../images/film.jpg";

const MovieCard = ({ title, length }) => {
  return (
    <li className="movie">
      <div className="movie__about">
        <a className="movie__link" href=" " target="_blank" rel="noreferrer">
          <h3 className="movie__title link">{title}</h3>
        </a>
        <p className="movie__length">{length} минут</p>
      </div>
      <a className="movie__link" href=" " target="_blank" rel="noreferrer">
        <img
          className="movie__screenshot link"
          src={MoviePicture}
          alt="movie screenshot"
        />{" "}
      </a>
      <button
            className="movie__button movie__button_delete"
            type="button"
      />
    </li>
  );
};

export default MovieCard;
