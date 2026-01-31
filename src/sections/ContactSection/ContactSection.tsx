import React from "react";
import { motion } from "framer-motion";
import styles from "./ContactSection.module.scss";
import { APP_CONFIG } from "../../configs/app.config";
import { staggerContainer, fadeUp } from "../../animations/variants";

const ContactSection: React.FC = () => {
    return (
        <motion.section
            className={styles.contact}
            id="contact"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className={styles.container}>
                {/* ===== Header ===== */}
                <motion.div className={styles.sectionHeader} variants={fadeUp}>
                    <h2 className={styles.sectionTitle}>
                        HUBUNGI <span>KAMI</span>
                    </h2>
                    <div className={styles.titleUnderline}></div>
                    <p className={styles.sectionSubtitle}>
                        Mari berkolaborasi dan berkarya bersama
                    </p>
                </motion.div>

                {/* ===== Content ===== */}
                <motion.div
                    className={styles.contactContent}
                    variants={staggerContainer}
                >
                    {/* ===== Info Cards ===== */}
                    <motion.div
                        className={styles.contactInfo}
                        variants={staggerContainer}
                    >
                        <motion.div
                            className={styles.infoCard}
                            variants={fadeUp}
                        >
                            <div className={styles.iconWrapper}>
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <circle
                                        cx="12"
                                        cy="10"
                                        r="3"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </div>
                            <h3>Lokasi</h3>
                            <p>{APP_CONFIG.address}</p>
                        </motion.div>

                        <motion.div
                            className={styles.infoCard}
                            variants={fadeUp}
                        >
                            <div className={styles.iconWrapper}>
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <polyline
                                        points="22,6 12,13 2,6"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h3>Email</h3>
                            <p>{APP_CONFIG.email}</p>
                        </motion.div>

                        <motion.div
                            className={styles.infoCard}
                            variants={fadeUp}
                        >
                            <div className={styles.iconWrapper}>
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h3>Telepon</h3>
                            <p>{APP_CONFIG.cp}</p>
                        </motion.div>

                        <motion.div
                            className={styles.infoCard}
                            variants={fadeUp}
                        >
                            <div className={styles.iconWrapper}>
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect
                                        x="2"
                                        y="7"
                                        width="20"
                                        height="15"
                                        rx="2"
                                        ry="2"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <polyline
                                        points="17 2 12 7 7 2"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h3>Media Sosial</h3>
                            <div className={styles.socialLinks}>
                                <a
                                    href={APP_CONFIG.social.instagram.link}
                                    aria-label="Instagram"
                                    target="_blank"
                                >
                                    Instagram
                                </a>
                                <a
                                    href={APP_CONFIG.social.tiktok.link}
                                    aria-label="Tiktok"
                                    target="_blank"
                                >
                                    Tiktok
                                </a>
                                <a
                                    href={APP_CONFIG.social.youtube.link}
                                    aria-label="YouTube"
                                    target="_blank"
                                >
                                    YouTube
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* ===== Map ===== */}
                    <motion.div
                        className={styles.mapContainer}
                        variants={fadeUp}
                    >
                        <iframe
                            className={styles.mapPlaceholder}
                            src={APP_CONFIG.gmaps}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ContactSection;
