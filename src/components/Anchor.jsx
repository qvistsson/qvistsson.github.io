import React from 'react';
import styled from 'styled-components';

const AnchorDiv = styled.div`
  display: block;
  position: relative;
  top: ${props => `-${props.theme.navHeight}`};
  visibility: hidden;
`;

const Anchor = ({ id }) => <AnchorDiv id={id} aria-hidden='true' />;

export default Anchor;
