import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.scss';

const MoviesList = ({ movies, titlePage = null }) => {
  const location = useLocation();

  return (
    <>
      {titlePage && <h1 className={styles.title}>{titlePage}</h1>}

      <ul className={styles.list}>
        {movies.map(({ id, title, name, poster_path }) => (
          <li key={id} className={styles.item}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
              className={styles.link}
            >
              <img
                src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                alt={title}
              />
              {title || name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ),
  titlePage: PropTypes.string,
};

export default MoviesList;
