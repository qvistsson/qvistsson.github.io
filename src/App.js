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
          margin="m-bottom"
          text="I'm Qvistsson"
          excl={false}
        />
        <Modules.TextContainer content={Text.Introduction()} />
        <Modules.SubHeader text="Projects" margin="m-top m-bottom" />
        <Modules.Project {...Projects.pomodoro} />
        <Modules.ProjectDivider divString="///" />
        <Modules.Project {...Projects.calculator} />
      </div>
    </div>
  );
}

export default App;
