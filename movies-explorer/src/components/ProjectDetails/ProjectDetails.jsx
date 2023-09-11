import React from "react";
import "./ProjectDetails.css";

const ProjectDetails = ({ name, about }) => {
  return (
    <li className="project-details">
      <h3 className="project-details__name">{name}</h3>
      <p className="project-details__description">{about}</p>
    </li>
  );
};

export default ProjectDetails;
