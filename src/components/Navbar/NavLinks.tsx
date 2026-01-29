import React, { memo } from "react";
import styles from "./Navbar.module.scss";
import type { NavLinksProps } from "../../types/navbar.types";

const NavLinks: React.FC<NavLinksProps> = ({ items, activeItem }) => {
    return (
        <ul className={styles.navLinks}>
            {items.map((item, index) => (
                <li key={item.id} style={{ animationDelay: `${index * 0.1}s` }}>
                    <a
                        href={`#${item.id}`}
                        className={activeItem === item.id ? styles.active : ""}
                    >
                        <span className={styles.navText}>{item.label}</span>
                        <span className={styles.navIndicator} />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default memo(NavLinks);
