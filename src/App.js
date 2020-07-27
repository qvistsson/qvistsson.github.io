import React from 'react';
import * as Modules from './Modules';
import Projects from './Projects';
import './css/utilities.css';
import './css/style.css';

function App() {
  return (
    <Modules.Container>
      <Modules.SiteLogo />
      <Modules.Introduction />
      <Modules.SubHeader text="Projects" />
      <Modules.ProjectsContainer>
        <Modules.Project {...Projects.pomodoro}/>
        <Modules.Project {...Projects.calculator}/>
      </Modules.ProjectsContainer>
      <Modules.SubHeader text="Contact" />
    </Modules.Container>
  );
}

export default App;
