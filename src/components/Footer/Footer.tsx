import React from "react";
import Logo from "../../assets/logo.png"
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.container}>
                    <div className={styles.footerGrid}>
                        <div className={styles.footerBrand}>
                            <div className={styles.logoSection}>
                                <img src={Logo} alt="Logo" className={styles.footerLogo} />
                                <h3>Teater Bara</h3>
                            </div>
                            <p className={styles.brandDescription}>
                                Menyalakan api seni dan menerangi jiwa budaya
                                melalui pertunjukan teater yang bermakna dan
                                menginspirasi.
                            </p>
                            <div className={styles.socialIcons}>
                                <a href="#" aria-label="Instagram">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect
                                            x="2"
                                            y="2"
                                            width="20"
                                            height="20"
                                            rx="5"
                                            ry="5"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <line
                                            x1="17.5"
                                            y1="6.5"
                                            x2="17.51"
                                            y2="6.5"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                                <a href="#" aria-label="Facebook">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                                <a href="#" aria-label="Twitter">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                                <a href="#" aria-label="YouTube">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <polygon
                                            points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className={styles.footerLinks}>
                            <h4>Menu</h4>
                            <ul>
                                <li>
                                    <a href="#home">Home</a>
                                </li>
                                <li>
                                    <a href="#about">Tentang Kami</a>
                                </li>
                                <li>
                                    <a href="#gallery">Galeri</a>
                                </li>
                                <li>
                                    <a href="#achievements">Pencapaian</a>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.footerLinks}>
                            <h4>Informasi</h4>
                            <ul>
                                <li>
                                    <a href="#team">Tim Kami</a>
                                </li>
                                <li>
                                    <a href="#contact">Hubungi Kami</a>
                                </li>
                                <li>
                                    <a href="#">Jadwal Latihan</a>
                                </li>
                                <li>
                                    <a href="#">Bergabung</a>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.footerContact}>
                            <h4>Kontak</h4>
                            <ul>
                                <li>
                                    <span>📍</span> Gedung Kesenian Jakarta
                                    <br />
                                    Jl. Seni Teater No. 123
                                </li>
                                <li>
                                    <span>📧</span> info@teaterbara.id
                                </li>
                                <li>
                                    <span>📞</span> +62 812-3456-7890
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <div className={styles.container}>
                    <div className={styles.bottomContent}>
                        <p>
                            &copy; {currentYear} Teater Bara. All rights
                            reserved.
                        </p>
                        <div className={styles.footerBottomLinks}>
                            <a href="#">Privacy Policy</a>
                            <span>•</span>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
