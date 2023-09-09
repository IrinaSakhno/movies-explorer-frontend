import React from "react";
import { Link } from 'react-router-dom';
import "./AuthHeader.css";
import HeaderLogo from "../../images/c-logo.svg";

const AuthHeader = ({ greeting }) => {
  return (
    <section className="header-auth">
      <div className="header-auth__container">
        <Link to="/"> 
          <img src={HeaderLogo} alt="logo" className="header-auth__logo" />
        </Link>
        <h1 className="header-auth__greeting">{greeting}</h1>
      </div>
    </section>
  );
};

export default AuthHeader;
