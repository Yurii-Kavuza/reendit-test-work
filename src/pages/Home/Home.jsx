import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/fetchMoviesApi';
import Box from 'components/Box';

const NavItem = styled(NavLink)`
  display: block;
  padding: ${p => p.theme.space[3]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  border-radius: 8px;
  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies().then(setTrendingMovies).catch(error=>console.log(error));
  }, []);

  return (
    <main>
      <Box as="h1" ml={4}>Trending today</Box>
      <ul>
        {trendingMovies.map(({ id, name, title }) => (
          <li key={id}>
            <NavItem to={`movies/${id}`} state={{from:location}}>{name ?? title}</NavItem>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;