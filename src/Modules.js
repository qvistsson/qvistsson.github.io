import React from 'react';

function SiteLogo(props) {
  return (
    <div
      className={
        props.margin
          ? 'flex-row align-start justify-between ' + props.margin
          : 'flex-row align-start justify-between'
      }
    >
      <div className="site-logo">
        <p>Q</p>
      </div>
      <a className="contact-top" href="#contact-info">
        Contact
      </a>
    </div>
  );
}

function Project(props) {
  return (
    <div
      className={
        props.margin
          ? 'max-width flex-row align-stretch ' + props.margin
          : 'max-width flex-row align-stretch'
      }
    >
      <div
        className="hide screen-small-flex-row align-center"
        style={{ minWidth: props.indent, maxWidth: props.indent }}
      >
        <div
          className="project-angle-deco grow"
          style={{ minHeight: props.decoHeight, maxHeight: props.decoHeight }}
        ></div>
        <i className="fas fa-circle m-left-small m-right project-circle"></i>
      </div>
      <div className="project-content flex-column grow">
        <div className="flex-row justify-between">
          <h2 className="proj-title d-inline m-bottom-small">{props.title}</h2>
          <div className="flex-row">
            {props.tags.map((i) => (
              <p className="intro-body d-inline m-left-small">
                <span>{i}</span>
              </p>
            ))}
          </div>
        </div>
        <p className="intro-body m-bottom-small">{props.description}</p>
        <div className="flex-row">
          <a
            href={props.viewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link-social"
          >
            <i className="far fa-eye"></i>Go To Project
          </a>
          <a
            href={props.gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link-social m-left-small screen-small-m-left"
          >
            <i className="fab fa-github"></i>View Source
          </a>
        </div>
      </div>
    </div>
  );
}

function SubHeader(props) {
  return (
    <div className={props.margin}>
      <h2 id={props.id} className="sub-header d-inline">
        {props.text}
      </h2>
    </div>
  );
}

function ShowyIndent(props) {
  return (
    <div
      className={
        props.margin
          ? 'flex-row align-center ' + props.margin
          : 'flex-row align-center'
      }
    >
      <div
        className="hide screen-small-flex-row align-center grow showy-indent"
      >
        <div className="deco-stretch m-right-small grow"></div>
        <i className="fas fa-circle m-right-small intro-circle"></i>
      </div>
      <p className="showy">
        {props.text}
        {props.excl && <span className="excl">!</span>}
      </p>
    </div>
  );
}

function TextContainer(props) {
  return <div className={props.margin}>{props.content}</div>;
}

function ProjectDivider(props) {
  return (
    <div
      className={
        props.margin
          ? 'project-divider flex-row align-center justify-center max-width ' +
            props.margin
          : 'project-divider flex-row align-center justify-center max-width'
      }
    >
      <div
        className="hide screen-small-block"
        style={{ width: props.indent }}
      ></div>
      <div className="horizontal-line"></div>
      <p className="proj-div-text">{props.divString}</p>
      <div className="horizontal-line"></div>
    </div>
  );
}

function ContactSocials(props) {
  return (
    <div
      className={
        props.margin
          ? 'flex-column screen-small-flex-row ' + props.margin
          : 'flex-column screen-small-flex-row'
      }
    >
      <a
        href={props.gitLink}
        target="_blank"
        rel="noopener noreferrer"
        className="link-social"
      >
        <i className="far fa-envelope"></i>e-mail
      </a>
      <a
        href={props.gitLink}
        target="_blank"
        rel="noopener noreferrer"
        className="link-social m-top-small screen-small-no-m-top screen-small-m-left"
      >
        <i className="fab fa-linkedin"></i>LinkedIn
      </a>
      <a
        href={props.gitLink}
        target="_blank"
        rel="noopener noreferrer"
        className="link-social m-top-small screen-small-no-m-top screen-small-m-left"
      >
        <i className="fab fa-github"></i>GitHub
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="flex-column screen-small-flex-row justify-center align-center">
      <p class="footer-text">© Qvistsson 2020</p>
      <i className="fas fa-circle hide screen-small-block m-left-small m-right-small footer-circle"></i>
      <p class="footer-text">
        Powered by{' '}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </p>
      <i className="fas fa-circle hide screen-small-block m-left-small m-right-small footer-circle"></i>
      <p class="footer-text">
        Icons from{' '}
        <a
          href="https://fontawesome.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Font Awesome
        </a>
      </p>
    </footer>
  );
}

export {
  SiteLogo,
  Project,
  SubHeader,
  ShowyIndent,
  TextContainer,
  ProjectDivider,
  ContactSocials,
  Footer,
};
