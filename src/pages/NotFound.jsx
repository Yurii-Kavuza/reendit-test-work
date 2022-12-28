import Box from '../components/Box';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="cemter">
      Sorry, we could not help you. Please return to the home{' '}
      <Link to="/" end>
        Home
      </Link>
    </Box>
  );
};
