import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { NotFound } from 'pages/NotFound';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import MovieDetails from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home</div>} />
          <Route path="movies" element={<div>Movies</div>} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<div>Cast</div>} />
            <Route path="reviews" element={<div>Review</div>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
