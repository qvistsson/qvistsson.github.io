import React from 'react';
import './css/utilities.css';
import './css/style.css';

// Components

import SiteLogo from './components/SiteLogo';
import ContactLink from './components/ContactLink';
import Portrait from './components/Portrait';

class App extends React.Component {
  componentDidMount() {
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
  }

  render() {
    return (
      <div id="site-container" className="flex-column">
        <div className="flex-column full-height p-small pos-rel">
          <div className="maxed flex-row justify-between">
            <SiteLogo />
            <ContactLink />
            <Portrait />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
