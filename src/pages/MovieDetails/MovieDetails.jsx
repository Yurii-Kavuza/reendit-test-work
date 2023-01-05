import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/fetchMoviesApi';
import { IMG_URL, WIDTH } from 'services/fetchMoviesApi';
import Box from 'components/Box';
import { NavItem } from 'components/AppBar/AppBar.styled';
import { BackLink } from 'components/BackLink';

const navItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  console.log(location);
  console.log(backLinkHref);
  const [movie, setMovie] = useState();

  useEffect(() => {
    fetchMovieById(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const genres = movie?.genres.map(genre => genre.name);
  const score = Math.round(movie?.vote_average * 10);
  const year = movie?.release_date.slice(0, 4);

  return (
    <main>
      <Box as="button" display="flex" alignItems="center" ml={4} p={0}>
        <BackLink to={backLinkHref}>Go back</BackLink>
      </Box>
      <Box display="flex" gridGap={4} p={4} mb={3} boxShadow="small">
        <img
          src={`${IMG_URL}/${WIDTH}${movie?.poster_path}`}
          alt={movie?.name ?? movie?.title}
          width="200"
        />
        <Box display="flex" flexDirection="column" gridGap={3}>
          <h1>
            {movie?.name ?? movie?.title} ({year})
          </h1>
          <div>User Score: {score}%</div>
          <h2>Overview</h2>
          <div>{movie?.overview} </div>
          <h3>Genres</h3>
          {genres && <div>{genres.join(', ')}</div>}
        </Box>
      </Box>
      <Box p={4} mb={3} boxShadow="small">
        <div>Additional information</div>
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={text} state={{ from: backLinkHref }}>
            {text}
          </NavItem>
        ))}
      </Box>
      <Box p={4}>
        <Outlet />
      </Box>
    </main>
  );
};

export default MovieDetails;
