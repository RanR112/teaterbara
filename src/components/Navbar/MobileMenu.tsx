import React, { memo } from "react";
import styles from "./Navbar.module.scss";
import type { MobileMenuProps } from "../../types/navbar.types";

const MobileMenu: React.FC<MobileMenuProps> = ({
    open,
    items,
    activeItem,
    onClose,
    logo,
}) => {
    return (
        <>
            {/* Overlay */}
            <div
                className={`${styles.mobileOverlay} ${
                    open ? styles.active : ""
                }`}
                onClick={onClose}
            />

            {/* Menu */}
            <div
                className={`${styles.mobileMenu} ${open ? styles.active : ""}`}
            >
                <div className={styles.mobileMenuHeader}>
                    <div className={styles.mobileLogoContainer}>
                        <img
                            src={logo}
                            alt="Teater Bara Logo"
                            className={styles.mobileLogo}
                        />
                        <div>
                            <span className={styles.mobileBrandName}>
                                Teater Bara
                            </span>
                            <span className={styles.mobileBrandTagline}>
                                Passion in Performance
                            </span>
                        </div>
                    </div>
                </div>

                <ul className={styles.mobileNavLinks}>
                    {items.map((item, index) => (
                        <li
                            key={item.id}
                            className={
                                activeItem === item.id ? styles.active : ""
                            }
                            style={{
                                animationDelay: `${index * 0.08}s`,
                            }}
                        >
                            <a href={`#${item.id}`} onClick={onClose}>
                                <span className={styles.itemNumber}>
                                    0{index + 1}
                                </span>
                                <span className={styles.itemText}>
                                    {item.label}
                                </span>
                                <span className={styles.itemArrow}>→</span>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className={styles.mobileMenuFooter}>
                    <p>© 2026 Teater Bara. All rights reserved.</p>
                </div>
            </div>
        </>
    );
};

export default memo(MobileMenu);
