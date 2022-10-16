import { Route, Routes } from 'react-router-dom';
import { Container } from './components/Container/Container';
import { Home } from './pages/Home/Home';
import { Navigation } from "./components/Navigation/Navigation";
import { MoviesPage } from "./pages/MoviesPage/MoviesPage"
import { MovieDetailsPage } from './pages/MovieDetailsPage/MovieDetailsPage'

export function App() {
  return (
    <Container >
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<div>cast</div>} />
            <Route path="review" element={<div>MovieReviewBox</div>} />
          </Route>
        </Route>
      </Routes>
    </Container >
  );
}