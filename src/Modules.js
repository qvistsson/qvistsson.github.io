import React from 'react';

function Introduction() {
  return (
    <div className="flex-column m-large">
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
      <div className="m-left-large m-top-small intro-text-container">
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

export { TestThing, Container, SiteLogo, Introduction };
