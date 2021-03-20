import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: red;
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.text};
`;

const TestDiv = () => (
  <StyledDiv className={'r m6'}>
    <p>Just a test</p>
  </StyledDiv>
);

export default TestDiv;
