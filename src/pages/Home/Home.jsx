import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/fetchMoviesApi';
import Box from 'components/Box';
import { MoviesList } from 'components/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(setTrendingMovies)
      .catch(error => console.log(error));
  }, []);

  return (
    <main>
      <Box as="h1" ml={4}>
        Trending today
      </Box>
      <MoviesList movies={trendingMovies} />
    </main>
  );
};

export default Home;
