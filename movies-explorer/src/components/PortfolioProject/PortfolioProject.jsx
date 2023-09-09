import React from "react";
import "./PortfolioProject.css";

const PortfolioProject = ({ name, link }) => {
  return (
    <li className="portfolio-project">
      <a href={link} className="portfolio-project__name" target="_blank" rel="noreferrer">{name}</a>
      <a href={link} className="portfolio-project__arrow" target="_blank" rel="noreferrer">
        &#8599;
      </a>
    </li>
  );
};

export default PortfolioProject;
