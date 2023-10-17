import React from "react";
import { Link } from "react-router-dom";
import "./AuthNavigation.css";

const AuthNavigation = ({ text, button, path }) => {
  return (
    <>
      <div className="auth-navigation">
        <p className="auth-navigation__text">{text}</p>
        <Link className="auth-navigation__button link" to={path}>
          {button}
        </Link>
      </div>
    </>
  );
};

export default AuthNavigation;
