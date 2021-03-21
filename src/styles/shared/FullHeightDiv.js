import styled from 'styled-components';

const FullHeightDiv = styled.div`
  min-height: calc(100vh - ${props => props.theme.navHeight});
`;

export default FullHeightDiv;
