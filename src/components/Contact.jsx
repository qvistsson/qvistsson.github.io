import React from 'react';

import FullHeightDiv from 'styles/shared/FullHeightDiv';
import Anchor from 'components/Anchor';

const Contact = () => {
  return (
    <FullHeightDiv className='r' style={{ backgroundColor: 'green' }}>
      <Anchor id='contact' />
      <p className='r'>Here should the Contact be</p>
    </FullHeightDiv>
  );
};

export default Contact;
