import { useLocation } from 'react-router-dom';
import { NavItem } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <ul>
      {movies.map(({ id, name, title }) => (
        <li key={id}>
          <NavItem
            to={path === '/movies' ? `/movies/${id}` : `movies/${id}`}
            state={{ from: location }}
          >
            {name ?? title}
          </NavItem>
        </li>
      ))}
    </ul>
  );
};
