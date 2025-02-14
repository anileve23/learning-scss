import { useEffect, useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContex";
import { Link } from "react-router-dom";
import styles from './navbar.module.scss';
import logo from '../assets/logo.png';

const Navbar = () => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext?.theme || 'light';

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleTheme = () => {
        themeContext?.setTheme?.(theme === 'light' ? 'dark' : 'light');
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = () => {
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`${styles.nav} ${styles[theme]}`}>
            <div>
                <a href="/learning-scss/"> 
                    <img src={logo} alt="Evelicious Logo" className={`${styles.logo} ${styles.largeLogo}`} />
                </a>
            </div>

            <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.show : ''} ${styles[theme]}`}>
                <li>
                    <Link to="/recipe-of-the-day" className={styles.link} onClick={handleLinkClick}>RECIPE OF THE DAY</Link>
                </li>
                <li>
                    <Link to="/recipies" className={styles.link} onClick={handleLinkClick}>RECIPES</Link>
                </li>
                <li>
                    <Link to="/holidays-seasons" className={styles.link} onClick={handleLinkClick}>HOLIDAYS & SEASONS</Link>
                </li>
                <li>
                    <Link to="/about-us" className={styles.link} onClick={handleLinkClick}>ABOUT US</Link>
                </li>
                <div className={`${isMobile ? styles.mobileSwitchContainer : 'switch-button'}`}>
<button
    className={`${styles.switchButton} ${isMobile ? styles.mobileSwitchButton : styles.desktopSwitchButton} ${styles.emoji}`}
    onClick={toggleTheme}
>
    {isMobile ? 'DARK MODE' : <span>{theme === 'dark' ? '🌙' : '☀️'}</span>}
</button>


    <label className={`${styles.switch} ${!isMobile ? styles.hideCheckbox : ''}`}>
        <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
        <span className={styles.slider}></span>
    </label>
</div>
            </ul>
            <button className={styles.hamburgerButton} onClick={toggleMobileMenu}>
                ☰
            </button>
        </nav>
    );
};

export default Navbar;
