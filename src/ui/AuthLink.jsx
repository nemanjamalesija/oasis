import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledAuthLink = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LinkMessage = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-700);
  transition: color 0.3s, background-color 0.3s;
  line-height: 1.5;
  font-weight: 500;
`;

const StyledLink = styled(Link)`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-brand-600);
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: var(--color-brand-700);
  }
  &:active {
    color: red;
  }
`;

const AuthLink = ({ to, page, children }) => {
  return (
    <StyledAuthLink>
      <LinkMessage>{children}</LinkMessage>
      <StyledLink to={to}>{page}</StyledLink>
    </StyledAuthLink>
  );
};

export default AuthLink;
