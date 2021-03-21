import React from 'react';

// components
import Header from 'components/Header';
import Main from 'components/Main';
import Intro from 'components/Intro';
import Portfolio from 'components/Portfolio';
import Contact from 'components/Contact';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Intro />
        <Portfolio />
        <Contact />
      </Main>
    </>
  );
};

export default App;
