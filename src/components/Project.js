import React from 'react';
import './Project.css';

const Project = ({ Project, margin, indent, decoHeight }) => (
  <div
    className={
      margin
        ? 'Style-max-width flex-row align-stretch ' + margin
        : 'Style-max-width flex-row align-stretch'
    }
  >
    <div
      className="hide screen-small-flex-row align-center"
      style={{ minWidth: indent, maxWidth: indent }}
    >
      <div
        className="Project-angle-deco grow"
        style={{ minHeight: decoHeight, maxHeight: decoHeight }}
      ></div>
      <i className="fas fa-circle m-left-small m-right Project-circle"></i>
    </div>
    <div className="flex-column grow">
      <div className="flex-row justify-between">
        <h2 className="Project-title d-inline m-bottom-small">
          {Project.title}
        </h2>
        <div className="flex-row">
          {Project.tags.map((i) => (
            <p className="Style-intro-body-dark d-inline m-left-small">
              <span>{i}</span>
            </p>
          ))}
        </div>
      </div>
      <p className="Style-intro-body-dark m-bottom-small">{Project.description}</p>
      <div className="flex-row">
        <a
          href={Project.viewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="Project-link-social"
        >
          <i className="far fa-eye"></i>Go To Project
        </a>
        <a
          href={Project.gitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="Project-link-social m-left-small screen-small-m-left"
        >
          <i className="fab fa-github"></i>View Source
        </a>
      </div>
    </div>
  </div>
);

export default Project;
