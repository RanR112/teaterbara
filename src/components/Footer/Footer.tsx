import React from "react";
import Logo from "../../assets/images/logo.png";
import styles from "./Footer.module.scss";
import { APP_CONFIG } from "../../configs/app.config";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.container}>
                    <div className={styles.footerGrid}>
                        <div className={styles.footerBrand}>
                            <div className={styles.logoSection}>
                                <img
                                    src={Logo}
                                    alt="Logo"
                                    className={styles.footerLogo}
                                />
                                <h3>Teater Bara</h3>
                            </div>
                            <p className={styles.brandDescription}>
                                Menyalakan api seni dan menerangi jiwa budaya
                                melalui pertunjukan teater yang bermakna dan
                                menginspirasi.
                            </p>
                            <div className={styles.socialIcons}>
                                <a
                                    href={APP_CONFIG.social.instagram.link}
                                    aria-label="Instagram"
                                >
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
                                <a
                                    href={APP_CONFIG.social.tiktok.link}
                                    aria-label="Tiktok"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        {" "}
                                        <path
                                            d="M16 2c1.3 2.5 3.5 4 6 4v4c-2.6 0-4.9-.8-6-2v6.5a6.5 6.5 0 1 1-5.5-6.4v4.2a2.5 2.5 0 1 0 1.5 2.3V2h4z"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />{" "}
                                    </svg>
                                </a>
                                <a
                                    href={APP_CONFIG.social.youtube.link}
                                    aria-label="YouTube"
                                >
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
                            </ul>
                        </div>

                        <div className={styles.footerContact}>
                            <h4>Kontak</h4>
                            <ul>
                                <li>
                                    <span>
                                        <MapPin />
                                    </span>{" "}
                                    {APP_CONFIG.address}
                                </li>
                                <li>
                                    <span>
                                        <Mail />
                                    </span>{" "}
                                    {APP_CONFIG.email}
                                </li>
                                <li>
                                    <span>
                                        <Phone />
                                    </span>{" "}
                                    {APP_CONFIG.cp}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <div className={styles.container}>
                    <div className={styles.bottomContent}>
                        <a href="https://randyrafael.my.id" target="_blank">
                            &copy; {currentYear} Teater Bara. All rights
                            reserved.
                        </a>
                        <div className={styles.footerBottomLinks}>
                            <p>"Teater bukan sekadar panggung, tapi ruang hidup gagasan."</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
