import React, { useEffect, useRef } from "react";
import styles from "./HeroSection.module.scss";
import introVideo from "../../assets/videos/intro.webm";
import { useSectionObserver } from "../../hooks/useSectionObserver";

const HeroSection: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { ref, isVisible } = useSectionObserver({ threshold: 0.1 });

    useEffect(() => {
        videoRef.current?.play().catch(() => {});
    }, []);

    return (
        <section
            ref={ref}
            id="home"
            className={`${styles.hero} ${isVisible ? styles.visible : ""}`}
        >
            <div className={styles.heroVideoOverlay}>
                <video ref={videoRef} muted loop playsInline>
                    <source src={introVideo} type="video/webm" />
                </video>
            </div>

            <div className={styles.heroBackgroundOverlay} />

            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                    WELCOME TO
                    <span className={styles.highlight}> TEATER BARA</span>
                </h1>

                <p className={styles.heroSubtitle}>
                    Menyalakan Api Seni, Menerangi Jiwa Budaya
                </p>

                <div className={styles.heroDescription}>
                    <p>
                        Teater Bara adalah wadah ekspresi seni teater yang
                        berkomitmen untuk menghadirkan pertunjukan berkualitas
                        dan bermakna bagi masyarakat.
                    </p>
                </div>

                <div className={styles.heroButtons}>
                    <a href="#about" className={styles.btnPrimary}>
                        Jelajahi Kami
                    </a>
                    <a href="#contact" className={styles.btnSecondary}>
                        Hubungi Kami
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
