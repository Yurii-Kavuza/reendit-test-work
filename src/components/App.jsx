import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from '../pages/Home';
//import { Movies } from '../pages/Movies/Movies';
import NotFound from 'pages/NotFound/NotFound';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import MovieDetails from '../pages/MovieDetails';
import { Cast } from './Cast';
import { Review } from './Review';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<div>Movies</div>} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
