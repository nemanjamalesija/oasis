import styled from 'styled-components';

const StyledAuthFormLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const AuthFormLayout = ({ children }) => {
  return (
    <StyledAuthFormLayout>{children}</StyledAuthFormLayout>
  );
};

export default AuthFormLayout;