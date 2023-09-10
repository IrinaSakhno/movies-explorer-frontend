import React from "react";
import { useNavigate } from 'react-router-dom';
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="not-found">
        <div className="not-found__container">
          <h1 className="not-found__error">404</h1>
          <p className="not-found__error-text">Страница не найдена</p>
          <button onClick={() => {navigate(-1)}} className="not-found__button link">
            Назад
          </button>
        </div>
      </main>
    </>
  );
};

export default NotFound;
