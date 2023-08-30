import React from "react";
import "./Profile.css";
import HeaderAuthorized from "../HeaderAuthorized/HeaderAuthorized";

const Profile = ({ name }) => {
  return (
    <>
      <HeaderAuthorized />
      <main className="profile">
        <div className="profile__container">
            <h2 className="profile__title">Привет, {name}!</h2>
            <form className="profile__form" noValidate>
                <input
                type="email"
                className="profile__form-field"
                placeholder="Email"
                name="email"
                required
                />
                <input
                type="password"
                className="profile__form-field"
                placeholder="Пароль"
                name="password"
                required
                />
                <button
                type="submit"
                className="profile__submit-button link"
                >
                Войти
                </button>
            </form>
            <a href="_blank" className="profile__signout-button link">Назад</a>
        </div>
      </main>
    </>
  );
};

export default Profile;
