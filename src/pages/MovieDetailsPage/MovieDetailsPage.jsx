import { useState, useEffect } from 'react';
import { MovieDetailsPage } from '../../services/apiServices';
import css from '../MovieDetailsPage/MovieDetailsPage.module.css';

export const MovieDetails = () => {
    const [id, setId] = useState(null);

    useEffect(() => {
        MovieDetailsPage(id).then(setId);
    }, [id]);

    return (
        <>
            <h2 className={css.subtitle}>Additional information</h2>
        </>
    )
}
