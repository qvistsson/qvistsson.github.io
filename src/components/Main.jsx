import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  padding-top: ${props => props.theme.navHeight};
`;

const Main = ({ children }) => {
  return <StyledMain className='r'>{children}</StyledMain>;
};

export default Main;
