import axios from 'axios';

const API_KEY = 'd984b4c758c2885930eb52b6130716de';
const TRENDING = 'trending';
const MEDIA_TYPE = 'movie';
const TIME_WINDOW = 'week';
export const IMG_URL = 'https://image.tmdb.org/t/p';
export const WIDTH = 'w500';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `/${TRENDING}/${MEDIA_TYPE}/${TIME_WINDOW}`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data.results;
};

export const fetchMovieById = async id => {
  const movie = await axios.get(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return movie.data;
};

export const fetchCastById = async id => {
  const movie = await axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return movie.data.cast;
};

export const fetchReviewById = async id => {
  const movie = await axios.get(`/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return movie.data.results;
};
