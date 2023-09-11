import React from "react";
import { Link } from 'react-router-dom';
import "./AuthHeader.css";
import HeaderLogo from "../../images/c-logo.svg";

const AuthHeader = ({ greeting }) => {
  return (
    <header className="header-auth">
      <div className="header-auth__container">
        <Link to="/"> 
          <img src={HeaderLogo} alt="логотип проекта" className="header-auth__logo link" />
        </Link>
        <h1 className="header-auth__greeting">{greeting}</h1>
      </div>
    </header>
  );
};

export default AuthHeader;
