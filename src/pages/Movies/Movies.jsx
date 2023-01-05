import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar';
import { MoviesList } from 'components/MoviesList';
import { fetchReviewBySearchedWord } from 'services/fetchMoviesApi';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedWord = searchParams.get('query') ?? '';
  const [value, setValue] = useState(searchedWord);

  const updateQueryString = query => {
    setValue(query);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value === '') {
      return alert('Please fill in the field!');
    }
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!searchedWord) {
      return;
    }

    fetchReviewBySearchedWord(searchedWord)
      .then(setMovies)
      .catch(error => console.log(error));
  }, [searchedWord]);

  return (
    <>
      <SearchBar
        value={value}
        onSubmit={handleSubmit}
        onChange={updateQueryString}
      />
      <div>{movies && <MoviesList movies={movies} />}</div>
    </>
  );
};

export default Movies;