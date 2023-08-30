import React from "react";
import "./FooterLink.css";

const FooterLink = ({ name, link }) => {
  return (
    <li className="footer-link">
      <a href={link} className="footer-link__name link">
        {name}
      </a>
    </li>
  );
};

export default FooterLink;
