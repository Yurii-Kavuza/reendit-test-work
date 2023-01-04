import Box from '../../components/Box';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="cemter" p={3}>
      Sorry, we could not help you. Please return to the&nbsp;
      <Link to="/">Home</Link>
    </Box>
  );
};

export default NotFound;
