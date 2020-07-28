import React from 'react';
import * as Modules from './Modules';
import * as Text from './Text';
import Projects from './Projects';
import './css/utilities.css';
import './css/style.css';

function App() {
  return (
    <div className="flex-column p-small">
      <Modules.SiteLogo margin="m-bottom-large" />
      <div
        id="portfolio-content-container"
        className="flex-column m-bottom-large screen-small-m-left-small screen-small-m-right-small screen-medium-m-left-large screen-medium-m-right-large"
      >
        <Modules.ShowyIndent
          width="9rem"
          margin="m-bottom-small"
          text="Hi there"
          excl={true}
        />
        <Modules.ShowyIndent
          width="9rem"
          margin="m-bottom-large"
          text="I'm Qvistsson"
          excl={false}
        />
        <div
          id="indented-content"
          className="flex-column max-width screen-medium-m-left-large"
        >
          <Modules.TextContainer
            margin="m-bottom-large"
            content={Text.Introduction()}
          />
          <Modules.SubHeader text="Projects" margin="m-bottom-large m-left-x-large" />
          <Modules.Project
            {...Projects.pomodoro}
            indent="6rem"
            decoHeight="2rem"
          />
          <Modules.ProjectDivider divString="///" />
          <Modules.Project
            {...Projects.calculator}
            indent="6rem"
            decoHeight="2rem"
          />
          <Modules.ProjectDivider divString="///" />
          <Modules.Project
            {...Projects.dataviz}
            indent="6rem"
            decoHeight="2rem"
          />
          <Modules.ProjectDivider divString="///" />
          <Modules.Project
            {...Projects.dataviz2}
            indent="6rem"
            decoHeight="2rem"
          />
          <Modules.SubHeader
            text="Contact me"
            margin="m-top-large m-bottom"
            id="contact-info"
          />
          <Modules.TextContainer content={Text.ContactMe()} />
          <Modules.ContactSocials />
        </div>
      </div>
      <Modules.Footer />
    </div>
  );
}

export default App;
