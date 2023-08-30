import React from "react";
import "./ProjectDetails.css";

const ProjectDetails = ({ name, about }) => {
  return (
    <li className="project-details">
      <h3 class="project-details__name">{name}</h3>
      <p class="project-details__description">{about}</p>
    </li>
  );
};

export default ProjectDetails;
