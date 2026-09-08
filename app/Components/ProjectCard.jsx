
import React from "react";

function ProjectCard(props) {
  const previewText =
    props.description?.length > 120
      ? props.description.slice(0, 120) + "..."
      : props.description;

  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-image-wrap">
        <img
          src={props.image}
          alt={props.title}
          className="project-image"
        />
        <span className="project-number">PROJECT</span>
      </div>

      <div className="project-card-content">
        <div className="project-card-header">
          <h3>{props.title}</h3>
          <span className="project-arrow">↗</span>
        </div>

        <p>{previewText}</p>

        <div className="project-card-footer">
          <span>View project</span>
          <span className="project-line" />
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;

