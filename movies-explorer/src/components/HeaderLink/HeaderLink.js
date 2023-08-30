import React from "react";
import "./HeaderLink.css";

const HeaderLink = ({ name, link, style }) => {
  return (
    <li className="header-link">
      <a href={link} className={style}>
        {name}
      </a>
    </li>
  );
};

export default HeaderLink;
