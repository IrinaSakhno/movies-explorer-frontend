import React from "react";
import { Link } from 'react-router-dom';
import "./Profile.css";
import HeaderAuthorized from "../HeaderAuthorized/HeaderAuthorized";

const Profile = ({ name }) => {
  return (
    <>
      <HeaderAuthorized />
      <main className="profile">
        <section className="profile__container">
          <h1 className="profile__title">Привет, {name}!</h1>
          <form className="profile__form" noValidate>
            <div className="profile__form-container">
              <label className="profile__form-label">Имя</label>
              <input
                className="profile__form-field"
                name="name"
                id="name-input"
                type="text"
                placeholder="Введите имя"
                minLength="2"
                maxLength="40"
                required
              />
            </div>
            <div className="profile__form-container">
              <label className="profile__form-label">E-mail</label>
              <input
                className="profile__form-field"
                name="email"
                id="email-input"
                type="email"
                placeholder="Введите email"
                minLength="2"
                maxLength="40"
                pattern="^\S+@\S+\.\S+$"
                required
                // TODO: Подставить значение email
              />
            </div>
            <button type="submit" className="profile__submit-button link">
              Редактировать
            </button>
          </form>
          <Link to="/" className="profile__signout-button link">
            Выйти из аккаунта
          </Link>
        </section>
      </main>
    </>
  );
};

export default Profile;
