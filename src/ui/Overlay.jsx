import styled from 'styled-components';

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 998;
  transition: all 0.5s;
`;

const Overlay = ({ close }) => {
  return <StyledOverlay onClick={() => close()}></StyledOverlay>;
};

export default Overlay;
