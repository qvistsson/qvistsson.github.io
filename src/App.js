import React from 'react';
import * as Modules from './Modules';
import * as Text from './Text';
import Projects from './Projects';
import './css/utilities.css';
import './css/style.css';

function App() {
  return (
    <div className="flex-column p-small">
      <Modules.SiteLogo />
      <div id="portfolio-content-container" className="flex-column m-large">
        <Modules.ShowyIndent
          width="8.5rem"
          margin="m-bottom-small"
          text="Hi there"
          excl={true}
        />
        <Modules.ShowyIndent
          width="11.5rem"
          margin="m-bottom-large"
          text="I'm Qvistsson"
          excl={false}
        />
        <Modules.TextContainer content={Text.Introduction()} />
        <Modules.SubHeader text="Projects" margin="m-top-large m-bottom-large" />
        <Modules.Project {...Projects.pomodoro} />
        <Modules.ProjectDivider divString="///" />
        <Modules.Project {...Projects.calculator} />
        <Modules.ProjectDivider divString="///" />
        <Modules.Project {...Projects.dataviz} />
        <Modules.SubHeader text="Contact me" margin="m-top-large m-bottom" id="contact-info" />
        <Modules.TextContainer content={Text.ContactMe()} />
        <Modules.ContactSocials />
      </div>
      <Modules.Footer />
    </div>
  );
}

export default App;
