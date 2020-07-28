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
          <Modules.SubHeader
            text="Projects"
            margin="m-bottom-large screen-small-m-left-x-large"
          />
          <Modules.Project
            {...Projects.pomodoro}
            margin="m-bottom-large"
            indent="6rem"
            decoHeight="2rem"
          />
          <Modules.ProjectDivider
            indent="6rem"
            margin="m-bottom-large"
            divString="///"
          />
          <Modules.Project
            {...Projects.calculator}
            margin="m-bottom-large"
            indent="6rem"
            decoHeight="2rem"
          />
          <Modules.ProjectDivider
            indent="6rem"
            margin="m-bottom-large"
            divString="///"
          />
          <Modules.Project
            {...Projects.dataviz}
            margin="m-bottom-large"
            indent="6rem"
            decoHeight="2rem"
          />
          <Modules.ProjectDivider
            indent="6rem"
            margin="m-bottom-large"
            divString="///"
          />
          <Modules.Project
            {...Projects.dataviz2}
            margin="m-bottom-large"
            indent="6rem"
            decoHeight="2rem"
          />
          <Modules.ProjectDivider
            indent="6rem"
            margin="m-bottom-large"
            divString="///"
          />
          <Modules.SubHeader
            text="Contact me"
            margin="screen-small-m-left-x-large m-bottom-large"
            id="contact-info"
          />
          <Modules.TextContainer margin="screen-small-m-left-x-large m-bottom-small" content={Text.ContactMe()} />
          <Modules.ContactSocials margin="screen-small-m-left-x-large" />
        </div>
      </div>
      <Modules.Footer />
    </div>
  );
}

export default App;
