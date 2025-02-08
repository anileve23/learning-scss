import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContex";
import styles from './navbar.module.scss';
import logo from '../assets/logo.png';
import RecipeOfTheDay from "./RecipeOfTheDay";

const Navbar = () => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext?.theme || 'light';

    const toggleTheme = () => {
        themeContext?.setTheme?.(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <nav className={`${styles.nav} ${styles[theme]}`}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Evelicious Logo" className={`${styles.logo} ${styles.largeLogo}`} />
            </div>
            <ul>
                <li>RECIPE OF THE DAY</li>
                <li>RECIPES</li>
                <li>HOLIDAYS & SEASONS</li>
                <li>ABOUT US</li>
            </ul>
            <button
                className={`switch-button ${theme === 'dark' ? 'dark-theme-button' : ''}`}
                onClick={toggleTheme}
            >
                Switch Theme
            </button>
        </nav>
    );
};

export default Navbar;
