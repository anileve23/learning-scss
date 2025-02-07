import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContex";
import styles from './navbar.module.scss';

const Navbar = () => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext?.theme || 'light';

    console.log(theme);

    return (
        <nav className={`${styles.nav} ${styles[theme]}`}>
            <h1>Logo</h1>
            <ul>
                <li>About</li>
                <li>Design</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
