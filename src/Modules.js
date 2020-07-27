import React from 'react';

const dividerString = '///';

function Introduction() {
  return (
    <div className="flex-column m-top-large m-left-large m-right-large m-bottom">
      <div className="flex-row align-center m-bottom-small">
        <div className="deco-container flex-row align-center">
          <div className="deco-stretch m-right-small"></div>
          <i className="fas fa-circle m-right-small intro-circle"></i>
        </div>
        <p className="showy">
          Hi there<span className="excl">!</span>
        </p>
      </div>
      <div className="flex-row align-center m-bottom">
        <div className="deco-container2 flex-row align-center">
          <div className="deco-stretch2 m-right-small"></div>
          <i className="fas fa-circle m-right-small intro-circle"></i>
        </div>
        <p className="showy">I'm Qvistsson</p>
      </div>
      <div className="m-left-large m-top-small intro-text-container max-width">
        <p className="intro-body m-bottom-small">
          Or less uniquely, Oscar - that's my name. And I've been all about
          front end development since April 2020, when I realized coding and
          design was my jam. Since then I've been on a relatively intense
          self-studying journey, and I've already learned a bunch of things. I
          got a good handle on <span>HTML</span> and <span>CSS</span>, and enjoy
          creating <span>React</span> apps.
        </p>
        <p className="intro-body m-bottom-small">
          I've also created <span>WordPress</span> themes, <span>D3</span> data
          visualizations and currently I'm studying <span>Bootstrap</span> and{' '}
          <span>Redux</span>.
        </p>
      </div>
    </div>
  );
}

function SiteLogo() {
  return (
    <div className="site-logo">
      <p>Q</p>
    </div>
  );
}

function TestThing() {
  return <h2>Booyah</h2>;
}

function Container(props) {
  return <div className="container flex-column p-small">{props.children}</div>;
}

function ProjectsContainer(props) {
  return (
    <div className="projects-container m-left-large m-right-large">
      {props.children}
    </div>
  );
}

function Project(props) {
  return (
    <div className="project m-left-large max-width flex-column align-start m-bottom">
      <div className="flex-row align-center maxed">
        <div className="project-angle-deco"></div>
        <i className="fas fa-circle m-left-small project-circle"></i>
        <div className="project-content m-left grow">
          <div className="flex-row justify-between align-stretch">
            <h2 className="proj-title d-inline m-right-small">{props.title}</h2>
            <div className="flex-row align-center">
              {props.tags.map((i) => (
                <p className="proj-tag d-inline">{i}</p>
              ))}
            </div>
          </div>
          <p className="intro-body m-top-small">{props.description}</p>
        </div>
      </div>
      <div className="project-divider flex-row align-center justify-center m-top-large m-bottom-large">
        <div className="horizontal-line"></div>
        <p className="proj-div-text">{dividerString}</p>
        <div className="horizontal-line"></div>
      </div>
    </div>
  );
}

function SubHeader(props) {
  return (
    <div className="m-left-large m-bottom">
      <div className="sub-header-container flex-row justify-start align-stretch max-width m-left-large">
        <div className="sub-header-deco-div"></div>
        <h2 className="sub-header">{props.text}</h2>
        <div className="sub-header-deco-div"></div>
      </div>
    </div>
  );
}

export {
  TestThing,
  Container,
  SiteLogo,
  Introduction,
  Project,
  ProjectsContainer,
  SubHeader,
};
