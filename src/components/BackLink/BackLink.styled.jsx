import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  display: flex;
  width: 100%;
  align-items: center;
  padding: ${p => p.theme.space[1]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.white};

  :hover {
    color: ${p => p.theme.colors.primary};
  }
`;
