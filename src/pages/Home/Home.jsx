import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendMovies } from '../../services/apiServices';

export const Home = () => {
    const location = useLocation();
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        fetchTrendMovies().then(setMovies);
    }, []);

    return (
        <>
            <h1>Trending today</h1>
            {movies && (
                <ul>
                    {movies.map(({ id, title }) => (
                        <li key={id} >
                            <Link
                                to={{ pathname: `/movies/${id}`, state: { from: location, }, }}>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}