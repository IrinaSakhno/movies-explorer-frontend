import React from "react";
import { NavLink } from 'react-router-dom';
import "./BurgerMenu.css";
import AccountLogo from "../../images/account-logo.svg";

const BurgerMenu = () => {
  function closeBurgerMenu() {
    var burgerMenu = document.getElementById("burger-menu");
    burgerMenu.classList.remove("burger-menu_opened");
  }

  return (
    <>
      <div className="burger-menu" id="burger-menu">
        <div className="burger-menu__overlay"></div>
        <div className="burger-menu__container">
          <button onClick={closeBurgerMenu} className="burger-menu__close-button link" type="button"></button>
          <div className="burger-menu__menu">
            <NavLink
                to="/"
                className={({isActive}) => `burger-menu__link link ${isActive ? "burger-menu__link_active" : ""}`}
            >
              Главная
            </NavLink>
            <NavLink
                to="/movies"
                className={({isActive}) => `burger-menu__link link ${isActive ? "burger-menu__link_active" : ""}`}
            >
              Фильмы
            </NavLink>
            <NavLink
                to="/saved-movies"
                className={({isActive}) => `burger-menu__link link ${isActive ? "burger-menu__link_active" : ""}`}
            >
              Сохранённые фильмы
            </NavLink>
            <div className="header-authorized__profile burger-menu__profile">
              <NavLink
                to="profile"
                className="header-authorized__hyperlink header-authorized__hyperlink_active link"
              >
                Аккаунт
              </NavLink>
              <NavLink to="profile">
                <img
                  src={AccountLogo}
                  alt="account"
                  className="header-authorized__account-logo link"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
