import React from 'react';

import FullHeightDiv from 'styles/shared/FullHeightDiv';
import Anchor from 'components/Anchor';

const Portfolio = () => {
  return (
    <FullHeightDiv className='r' style={{ backgroundColor: 'red' }}>
      <Anchor id='portfolio' />
      <p className='r'>Here should the Portfolio be</p>
    </FullHeightDiv>
  );
};

export default Portfolio;
