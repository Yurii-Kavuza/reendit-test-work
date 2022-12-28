import axios from 'axios';

const API_KEY = 'd984b4c758c2885930eb52b6130716de';
const TRENDING = 'trending';
const MEDIA_TYPE = 'all';
const TIME_WINDOW = 'week';
const START_PAGE = 1;
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
export const PER_PAGE = 12;

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchImages = async (search, page = START_PAGE) => {
  const response = await axios.get('', {
    params: {
      q: search,
      api_key: API_KEY,
      per_page: PER_PAGE,
    },
  });
  return response.data;
};

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
