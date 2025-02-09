import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContex";
import { Link } from "react-router-dom";
import styles from './navbar.module.scss';
import logo from '../assets/logo.png';

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
        <li>
            <Link to="/recipe-of-the-day" className={styles.link}>RECIPE OF THE DAY</Link>
        </li>
        <li>
            <Link to="/recipies" className={styles.link}>RECIPES</Link>
        </li>
        <li>
            <Link to="/holidays-seasons" className={styles.link}>HOLIDAYS & SEASONS</Link>
        </li>
        <li>
            <Link to="/about-us" className={styles.link}>ABOUT US</Link>
        </li>
    </ul>
    <button
    className={`switch-button ${theme === 'dark' ? 'dark-theme-button' : ''}`}
    onClick={toggleTheme}
>
    {theme === 'dark' ? '🌙' : '☀️'}
    </button>

</nav>

    );
};

export default Navbar;
