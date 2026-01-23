import React from "react";
import Logo from '../../assets/logo.png'
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <img
                    src={Logo}
                    alt="Logo"
                    className={styles.navbarLogo}
                />
                <span className={styles.brandName}>Teater Bara</span>
            </div>

            <ul className={styles.navLinks}>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            {/* Mobile Menu Button */}
            <button className={styles.menuToggle}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
};

export default Navbar;
