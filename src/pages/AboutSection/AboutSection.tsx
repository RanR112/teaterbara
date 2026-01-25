import React, { useEffect, useRef, useState } from "react";
import styles from "./AboutSection.module.scss";
import CountUp from "../../components/CountUp/CountUp";
import image from "../../assets/logo.png"

const AboutSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            className={`${styles.about} ${isVisible ? styles.visible : ""}`}
            id="about"
            ref={sectionRef}
        >
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        TENTANG <span>KAMI</span>
                    </h2>
                    <div className={styles.titleUnderline}></div>
                </div>

                <div className={styles.aboutContent}>
                    <div className={styles.aboutImage}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.imagePlaceholder}>
                                <img src={image} alt="About Image" />
                            </div>
                            <div className={styles.imageOverlay}></div>
                        </div>
                    </div>

                    <div className={styles.aboutText}>
                        <h3 className={styles.aboutSubtitle}>
                            Berkarya Dengan Semangat Yang Membara
                        </h3>

                        <p className={styles.aboutParagraph}>
                            <strong>Teater Bara</strong> adalah sebuah komunitas
                            seni teater yang didirikan dengan visi untuk menjadi
                            wadah bagi para seniman muda dalam mengekspresikan
                            kreativitas mereka melalui seni pertunjukan.
                        </p>

                        <p className={styles.aboutParagraph}>
                            Kami percaya bahwa teater bukan hanya sekadar
                            hiburan, tetapi juga merupakan medium untuk
                            menyampaikan pesan, menggugah pemikiran, dan
                            menginspirasi perubahan positif di masyarakat.
                        </p>

                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>
                                    <CountUp
                                        from={0}
                                        to={30}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                    />
                                    +
                                </div>
                                <div className={styles.statLabel}>
                                    Pertunjukan
                                </div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>
                                    <CountUp
                                        from={0}
                                        to={50}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                    />
                                    +
                                </div>
                                <div className={styles.statLabel}>
                                    Anggota Aktif
                                </div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>
                                    <CountUp
                                        from={0}
                                        to={10}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                    />
                                    +
                                </div>
                                <div className={styles.statLabel}>
                                    Penghargaan
                                </div>
                            </div>
                        </div>

                        <div className={styles.mission}>
                            <h4>Misi Kami</h4>
                            <ul>
                                <li>
                                    Mengembangkan bakat seni teater di kalangan
                                    muda
                                </li>
                                <li>
                                    Melestarikan dan mengembangkan budaya lokal
                                </li>
                                <li>
                                    Menciptakan karya-karya berkualitas dan
                                    bermakna
                                </li>
                                <li>
                                    Membangun apresiasi masyarakat terhadap seni
                                    teater
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
