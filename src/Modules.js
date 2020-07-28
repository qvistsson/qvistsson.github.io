import React from 'react';

function SiteLogo() {
  return (
    <div className="flex-row align-center justify-start m-bottom-large screen-medium-no-m">
      <div className="site-logo">
        <p>Q</p>
      </div>
      <a className="contact-top m-left-large" href="#contact-info">
        Contact
      </a>
    </div>
  );
}

function Project(props) {
  return (
    <div className="project max-width flex-column align-start">
      <div className="flex-row align-center maxed">
        <div className="project-angle-deco hide screen-small-display"></div>
        <i className="fas fa-circle m-left-small project-circle hide screen-small-display"></i>
        <div className="project-content screen-small-m-left grow">
          <div className="flex-row justify-between align-stretch">
            <h2 className="proj-title d-inline m-right-small">{props.title}</h2>
            <div className="flex-row align-center">
              {props.tags.map((i) => (
                <p className="proj-tag d-inline">{i}</p>
              ))}
            </div>
          </div>
          <p className="intro-body m-top m-bottom">{props.description}</p>
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
              className="link-social m-left"
            >
              <i className="fab fa-github"></i>View Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubHeader(props) {
  return (
    <div className={props.margin} id={props.id}>
      <div className="sub-header-container flex-row justify-start align-stretch max-width">
        <div className="sub-header-deco-div"></div>
        <h2 className="sub-header">{props.text}</h2>
        <div className="sub-header-deco-div"></div>
      </div>
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
        className="flex-row align-center grow"
        style={{ maxWidth: props.width }}
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
  return <div className="max-width">{props.content}</div>;
}

function ProjectDivider(props) {
  return (
    <div className="project-divider flex-row align-center justify-center max-width m-top-large m-bottom-large">
      <div className="horizontal-line"></div>
      <p className="proj-div-text">{props.divString}</p>
      <div className="horizontal-line"></div>
    </div>
  );
}

function ContactSocials(props) {
  return (
    <div className="max-width flex-column align-start overflow-hidden">
      <div className="flex-row align-center maxed">
        <div className="project-angle-deco hide screen-small-display"></div>
        <i className="fas fa-circle m-left-small project-circle hide screen-small-display"></i>
        <div className="project-content screen-small-m-left grow">
          <div className="flex-row justify-around screen-small-justify-start">
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
              className="link-social m-left"
            >
              <i className="fab fa-linkedin"></i>LinkedIn
            </a>
            <a
              href={props.gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link-social m-left"
            >
              <i className="fab fa-github"></i>GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="flex-row justify-center align-center m-top-large screen-medium-no-m">
      <p class="footer-text">© Qvistsson 2020</p>
      <i className="fas fa-circle m-left-small m-right-small footer-circle"></i>
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
      <i className="fas fa-circle m-left-small m-right-small footer-circle"></i>
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
