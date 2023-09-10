import "./MovieCard.css";
import MoviePicture from "../../images/film.jpg";

const MovieCard = ({ title, length, link, altDescription }) => {
  return (
    <li className="movie">
      <div className="movie__about">
        <a className="movie__link" href={link} rel="noreferrer">
          <h2 className="movie__title link">{title}</h2>
        </a>
        <p className="movie__length">{length} минут</p>
      </div>
      <a className="movie__link" href={link} rel="noreferrer">
        <img
          className="movie__screenshot link"
          src={MoviePicture}
          alt={altDescription}
        />{" "}
      </a>
      <button className="movie__button movie__button_delete link" type="button" />
    </li>
  );
};

export default MovieCard;
