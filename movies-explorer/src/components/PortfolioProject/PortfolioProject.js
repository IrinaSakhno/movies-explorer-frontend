import React from "react";
import "./PortfolioProject.css";

const PortfolioProject = ({ name, link }) => {
  return (
    <li className="portfolio-project">
      <p className="portfolio-project__name">{name}</p>
      <a href={link} className="portfolio-project__arrow">
        &#8599;
      </a>
    </li>
  );
};

export default PortfolioProject;
