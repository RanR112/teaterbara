import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.logoContainer}>
                <img src={Logo} alt="Logo" className={styles.navbarLogo} />
                <span className={styles.brandName}>Teater Bara</span>
            </div>

            <ul
                className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}
            >
                <li>
                    <a href="#home" onClick={closeMenu}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" onClick={closeMenu}>
                        About
                    </a>
                </li>
                <li>
                    <a href="#gallery" onClick={closeMenu}>
                        Gallery
                    </a>
                </li>
                <li>
                    <a href="#achievements" onClick={closeMenu}>
                        Achievements
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={closeMenu}>
                        Contact
                    </a>
                </li>
            </ul>

            <button
                className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
};

export default Navbar;
