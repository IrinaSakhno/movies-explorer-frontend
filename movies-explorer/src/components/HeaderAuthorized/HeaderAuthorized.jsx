import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./HeaderAuthorized.css";
import HeaderLogo from "../../images/c-logo.svg";
import AccountLogo from "../../images/account-logo.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const HeaderAuthorized = () => {
  function openBurgerMenu() {
    var burgerMenu = document.getElementById("burger-menu");
    burgerMenu.classList.add("burger-menu_opened");
  }

  return (
    <header className="header-authorized">
      <BurgerMenu />
      <div className="header-authorized__container">
        <Link to="/">
          <img
            src={HeaderLogo}
            alt="логотип проекта"
            className="header-authorized__logo link"
          />
        </Link>
        <nav className="header-authorized__menu">
          <ul className="header-authorized__links">
            <li className="header-authorized__link">
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  `header-authorized__hyperlink link ${
                    isActive ? "header-authorized__hyperlink_active" : ""
                  }`
                }
              >
                Фильмы
              </NavLink>
            </li>
            <li className="header-authorized__link">
              <NavLink
                to="/saved-movies"
                className={({ isActive }) =>
                  `header-authorized__hyperlink link ${
                    isActive ? "header-authorized__hyperlink_active" : ""
                  }`
                }
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <div className="header-authorized__profile">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `header-authorized__hyperlink link ${
                  isActive ? "header-authorized__hyperlink_active" : ""
                }`
              }
            >
              Аккаунт
            </NavLink>
            <NavLink to="/profile">
              <img
                src={AccountLogo}
                alt="иконка аккаунта"
                className="header-authorized__account-logo link"
              />
            </NavLink>
          </div>
        </nav>
        <button
          type="button"
          onClick={openBurgerMenu}
          className="header-authorized__burger-menu link"
        ></button>
      </div>
    </header>
  );
};

export default HeaderAuthorized;
