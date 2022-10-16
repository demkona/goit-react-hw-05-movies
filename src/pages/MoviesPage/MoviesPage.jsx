import { useState, useEffect } from 'react';
import { fetchMoviesByQuery } from '../../services/apiServices';
import css from '../MoviesPage/MoviesPage.module.css';
import { MovieList } from '../../components/MovieList/MovieList'

export const MoviesPage = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        if (query === '') {
            return;
        }
        fetchMoviesByQuery(query).then(setMovies);
    }, [query]);

    const handleChange = e => {
        setQuery(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (query === '') {
            return;
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={css.searchForm}>
                <input
                    className={css.searchFormInput}
                    type="text"
                    value={query}
                    onChange={handleChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                />
                <button type="submit" className={css.searchFormButton}>Search</button>
            </form>
            <MovieList movies={movies} />
        </>
    );
}
