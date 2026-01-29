import React from "react";
import styles from "./AboutSection.module.scss";
import image from "../../assets/images/logo.png";
import { useSectionObserver } from "../../hooks/useSectionObserver";
import { Stat } from "./Stat";

const AboutSection: React.FC = () => {
    const { ref, isVisible } = useSectionObserver({ threshold: 0.2 });

    return (
        <section
            ref={ref}
            id="about"
            className={`${styles.about} ${isVisible ? styles.visible : ""}`}
        >
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        TENTANG <span>KAMI</span>
                    </h2>
                    <div className={styles.titleUnderline} />
                </div>

                <div className={styles.aboutContent}>
                    {/* IMAGE */}
                    <div className={styles.aboutImage}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.imagePlaceholder}>
                                <img src={image} alt="About Image" />
                            </div>
                            <div className={styles.imageOverlay}></div>
                        </div>
                    </div>

                    {/* TEXT */}
                    <div className={styles.aboutText}>
                        <h3 className={styles.aboutSubtitle}>
                            Berkarya Dengan Semangat Yang Membara
                        </h3>

                        <p className={styles.aboutParagraph}>
                            <strong>Teater Bara</strong> adalah sebuah komunitas
                            seni teater yang menjadi wadah ekspresi kreatif
                            seniman muda melalui seni pertunjukan.
                        </p>

                        <p className={styles.aboutParagraph}>
                            Kami percaya teater bukan sekadar hiburan, tetapi
                            medium refleksi, pesan sosial, dan inspirasi.
                        </p>

                        {/* STATS */}
                        <div className={styles.statsGrid}>
                            <Stat
                                visible={isVisible}
                                value={30}
                                label="Pertunjukan"
                            />
                            <Stat
                                visible={isVisible}
                                value={50}
                                label="Anggota Aktif"
                            />
                            <Stat
                                visible={isVisible}
                                value={10}
                                label="Penghargaan"
                            />
                        </div>

                        {/* MISSION */}
                        <div className={styles.mission}>
                            <h4>Misi Kami</h4>
                            <ul>
                                <li>Mengembangkan bakat seni teater muda</li>
                                <li>Melestarikan budaya lokal</li>
                                <li>Menciptakan karya bermakna</li>
                                <li>Membangun apresiasi masyarakat</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
