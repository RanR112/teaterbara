import React, { useEffect, useRef, useState } from "react";
import styles from "./HeroSection.module.scss";
import introVideo from "../../assets/videos/intro.webm";

const HeroSection: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 0);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
            if (videoRef.current) {
                videoRef.current.play().catch((error) => {
                    console.error("Error playing video:", error);
                });
            }
        }, []);

    return (
        <section className={styles.hero} id="home">
            <div className={styles.heroOverlay}>
                <video
                    ref={videoRef}
                    muted
                    loop
                >
                    <source src={introVideo} type="video/webm" />
                </video>
            </div>

            <div
                className={`${styles.heroContent} ${isVisible ? styles.visible : ""}`}
            >
                <h1 className={styles.heroTitle}>
                    WELCOME TO
                    <span className={styles.highlight}>TEATER BARA</span>
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
