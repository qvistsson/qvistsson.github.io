import React from 'react';
import './css/utilities.css';
import './css/style.css';

// Components

import SiteLogo from './components/SiteLogo';
import ContactLink from './components/ContactLink';
import Portrait from './components/Portrait';
import IndentedHeader from './components/IndentedHeader';
import TextContainer from './components/TextContainer';
import Project from './components/Project';
import Divider from './components/Divider';

// Data content

import * as Text from './Text';
import Projects from './Projects';

class App extends React.Component {
  /* componentDidMount() {
    const target = document.getElementById('obf-target');
    window.addEventListener(
      'scroll',
      function () {
        const input = 'bh\\giZ\\n)3;cj_hl/erq';
        let newString = '';
        for (let i = 0; i < input.length; i++) {
          newString += String.fromCharCode(input.charCodeAt(i) - i + 15);
        }
        target.setAttribute('href', 'mailto:' + newString);
      },
      { once: true, passive: true }
    );
  } */

  render() {
    return (
      <div id="site-container" className="flex-column">
        <div className="flex-column full-height p-small pos-rel">
          <div className="maxed flex-row justify-between m-bottom-large">
            <SiteLogo />
            <ContactLink />
          </div>
          <div className="flex-column screen-small-m-left-small screen-small-m-right-small screen-medium-m-left-large screen-medium-m-right-large">
            <Portrait />
            <IndentedHeader
              margin="m-bottom-small"
              text="Hi there"
              type="light"
              excl={true}
            />
            <IndentedHeader
              margin="m-bottom-large"
              text="I'm Oscar"
              type="light"
              excl={false}
            />
            <div className="flex-column screen-medium-m-left-large Style-max-width">
              <TextContainer
                margin="m-bottom-large"
                content={Text.Introduction}
              />
            </div>
          </div>
        </div>
        <div
          className="flex-column full-height p-left-small p-right-small p-top"
          style={{ backgroundColor: 'var(--theme2)' }}
        >
          <div className="flex-column screen-small-m-left-small screen-small-m-right-small screen-medium-m-left-large screen-medium-m-right-large">
            <IndentedHeader
              margin="m-bottom-large"
              text="Projects"
              type="dark"
              excl={false}
            />
            {Projects.map((project) => [
              <Project
                Project={project}
                margin="m-bottom-large"
                indent="6rem"
                decoHeight="2rem"
              />,
              <Divider indent="6rem" margin="m-bottom-large" divString="///" />,
            ])}
          </div>
        </div>
        <div className="flex-column full-height p-small pos-rel">
          <div className="flex-column screen-small-m-left-small screen-small-m-right-small screen-medium-m-left-large screen-medium-m-right-large p-top">
            <Portrait />
            <IndentedHeader
              margin="m-bottom-large"
              text="Contact me"
              type="light"
              excl={true}
            />
            <div className="flex-column screen-medium-m-left-large Style-max-width">
              <TextContainer
                margin="m-bottom-large"
                content={Text.ContactMe}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
