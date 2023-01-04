import { HiArrowLeft } from 'react-icons/hi';
import { NavItem } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <NavItem to={to}>
      <HiArrowLeft size="16" />
      {children}
    </NavItem>
  );
};
