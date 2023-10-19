import styled from 'styled-components';

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 99;
  transition: all 0.5s;
`;

const Overlay = () => {
  return <StyledOverlay></StyledOverlay>;
};

export default Overlay;
