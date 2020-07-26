import React from 'react';

function Introduction() {
  return (
    <div className="flex-column m-top-large m-left-large m-right-large">
      <div className="flex-row align-center m-bottom-small">
        <div className="deco-stretch m-right-small"></div>
        <i className="fas fa-circle m-right-small intro-circle"></i>
        <p className="showy">
          Hi there<span className="excl">!</span>
        </p>
      </div>
      <div className="flex-row align-center m-bottom">
        <div className="deco-stretch2 m-right-small"></div>
        <i className="fas fa-circle m-right-small intro-circle"></i>
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
        <p className="intro-body m-bottom-small">
          Please have a look at some of my projects:
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
    <div className="project m-left-large m-top-large max-width flex-column align-center">
      <div className="flex-row align-center">
        <div className="project-angle-deco"></div>
        <i className="fas fa-circle m-left-small project-circle"></i>
        <div className="project-content m-left">
          <h2 className="proj-title d-inline m-right-small">Project Title</h2>
          <p className="intro-body d-inline">
            So let's get a really long paragraph here like waho whio soh. So
            let's get a really long paragraph here like waho whio soh. So let's
            get a really long paragraph here like waho whio soh.
          </p>
        </div>
      </div>
      <i class="fas fa-angle-double-down m-top expand-icon"></i>
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
};
