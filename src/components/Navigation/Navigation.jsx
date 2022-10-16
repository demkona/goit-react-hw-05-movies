import { NavLink, Outlet } from 'react-router-dom';
import css from '../Navigation/Navigation.module.css';

export const Navigation = () => {
    return (
        <>
            <nav className={css.navigation}>
                <NavLink className={css.link} exact to="/">
                    Home
                </NavLink>
                <NavLink className={css.link} to="/movies">
                    Movies
                </NavLink>
            </nav>
            <Outlet />
        </>
    );
};