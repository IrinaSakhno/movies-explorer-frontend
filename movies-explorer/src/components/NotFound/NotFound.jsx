import React from "react";
import { Link } from 'react-router-dom';
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <section className="not-found">
        <div className="not-found__container">
          <h3 className="not-found__error">404</h3>
          <p className="not-found__error-text">Страница не найдена</p>
          <Link to="/" className="not-found__button link">
            Назад
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
