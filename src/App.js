import React from 'react';
import * as Modules from './Modules';
import './css/utilities.css';
import './css/style.css';

function App() {
  return (
    <Modules.Container>
      <Modules.SiteLogo />
      <Modules.Introduction />
    </Modules.Container>
  );
}

export default App;
