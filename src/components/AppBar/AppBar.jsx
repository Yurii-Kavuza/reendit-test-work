import { NavItem } from './AppBar.styled';
import Box from '../Box';

const navItems = [
  { href: '', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <Box as="header" mb={3}>
      <Box as="nav" p={3} display="flex" boxShadow="small">
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={text}>
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};
