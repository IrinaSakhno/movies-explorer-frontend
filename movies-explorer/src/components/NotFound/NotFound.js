import React from "react";

import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <section className="not-found">
        <div className="not-found__container">
            <h3 className="not-found__error">404</h3>
            <p className="not-found__error-text">Страница не найдена</p>
            <a href="_blank" className="not-found__button link">Назад</a>
        </div>
      </section>
    </>
  );
};

export default NotFound;
