import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  color: ${props => props.theme.textDark};
  background-color: ${props => props.theme.lightBg};
  height: ${props => props.theme.navHeight};
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  box-shadow: 0px 1px 0px 0px ${props => props.theme.fadedDetail};

  h1 {
    font-weight: 600;
  }

  a {
    text-decoration: none;
    font-weight: 400;
    color: ${props => props.theme.textDark};
  }
`;

const Header = () => {
  return (
    <StyledHeader className='r px3 flex-row align-center justify-between' id='header'>
      <h1 className='r fs4'>Oscar Lindqvist</h1>
      <nav>
        <a href='#portfolio' className='r'>
          Portfolio
        </a>
        <a href='#contact' className='r ml3'>
          Contact
        </a>
      </nav>
    </StyledHeader>
  );
};

export default Header;
