import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Container, Header, Logo, Link } from './App.styled';
//import Box from './Box';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { NotFound } from 'pages/NotFound';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

export const App = () => {
  return (
    <>
      {/* <Container>
        <Header>
          <Logo>
            <span role="img" aria-label="computer icon">
              💻
            </span>{' '}
            GoMerch Store
          </Logo>
          <nav>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </Container> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<div>Home</div>} />
          <Route path="movies" element={<div>Movies</div>} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
