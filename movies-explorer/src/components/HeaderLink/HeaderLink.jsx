import React from "react";
import { Link } from "react-router-dom";
import "./HeaderLink.css";

const HeaderLink = ({ name, link, style }) => {
  return (
    <li className="header__link-item">
      <Link to={link} className={style}>
        {name}
      </Link>
    </li>
  );
};

export default HeaderLink;
