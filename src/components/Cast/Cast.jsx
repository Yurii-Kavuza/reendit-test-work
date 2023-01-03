import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCastById } from 'services/fetchMoviesApi';
import { IMG_URL, WIDTH } from 'services/fetchMoviesApi';
import Box from 'components/Box';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCastById(movieId).then(setCast);
  }, [movieId]);


  return (
    <Box as="ul" display="flex" flexDirection="column" gridGap={5}>
      {cast.map(({ id, name, original_name, profile_path, character }) => (
        <li key={id}>
          <Box display="flex" flexDirection="column" gridGap={3}>
            <img
              src={`${IMG_URL}/${WIDTH}${profile_path}`}
              alt={name ?? original_name}
              width="80"
            />
            <div>{name ?? original_name}</div>
            <div>Character: {character}</div>
          </Box>
        </li>
      ))}
    </Box>
  );
};
