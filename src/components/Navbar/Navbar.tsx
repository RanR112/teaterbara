import React from "react";
import styles from "./Navbar.module.scss";
import Logo from "../../assets/images/logo.png";

import { useNavbar } from "../../hooks/useNavbar";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar: React.FC = () => {
    const {
        isMenuOpen,
        scrolled,
        activeItem,
        navItems,
        toggleMenu,
        closeMenu,
    } = useNavbar();

    return (
        <>
            {/* Desktop Navbar */}
            <nav
                className={`${styles.navbar} ${
                    scrolled ? styles.scrolled : ""
                }`}
            >
                <div className={styles.navContainer}>
                    {/* Logo */}
                    <div className={styles.logoContainer}>
                        <div className={styles.logoWrapper}>
                            <img
                                src={Logo}
                                alt="Teater Bara Logo"
                                className={styles.navbarLogo}
                            />
                            <div className={styles.logoGlow} />
                        </div>

                        <div className={styles.brandInfo}>
                            <span className={styles.brandName}>
                                Teater Bara
                            </span>
                            <span className={styles.brandTagline}>
                                Passion in Performance
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <NavLinks items={navItems} activeItem={activeItem} />
                </div>
            </nav>

            {/* Mobile Toggle Button */}
            <button
                className={`${styles.menuToggle} ${
                    isMenuOpen ? styles.active : ""
                }`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
                <span />
                <span />
                <span />
            </button>

            {/* Mobile Menu */}
            <MobileMenu
                open={isMenuOpen}
                items={navItems}
                activeItem={activeItem}
                onClose={closeMenu}
                logo={Logo}
            />
        </>
    );
};

export default Navbar;
