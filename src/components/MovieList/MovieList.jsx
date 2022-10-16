import { Link, useLocation, } from 'react-router-dom';

export const MovieList = ({ movies }) => {
    const { pathname } = useLocation();
    const location = useLocation();
    return (
        <>
            {movies && (
                <ul>
                    {movies.map(({ id, title, poster_path }) => (
                        <li key={id}>
                            <Link
                                to={{
                                    pathname: `${pathname}/${id}`,
                                    state: {
                                        from: location,
                                    },
                                }}
                            >
                                <img
                                    src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                                    alt={title}
                                />
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};
