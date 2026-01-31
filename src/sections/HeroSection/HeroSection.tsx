import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.scss";
import { hero } from "../../assets/index.assets";
import { staggerContainer, fadeUp } from "../../animations/variants";

const HeroSection: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        videoRef.current?.play().catch(() => {});
    }, []);

    return (
        <motion.section
            id="home"
            className={styles.hero}
            variants={staggerContainer}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
        >
            {/* Background Video */}
            <div className={styles.heroVideoOverlay}>
                <video ref={videoRef} muted loop playsInline autoPlay>
                    <source src={hero} type="video/mp4" />
                </video>
            </div>

            <div className={styles.heroBackgroundOverlay} />

            {/* Content */}
            <motion.div
                className={styles.heroContent}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 className={styles.heroTitle} variants={fadeUp}>
                    WELCOME TO
                    <span className={styles.highlight}> TEATER BARA</span>
                </motion.h1>

                <motion.p className={styles.heroSubtitle} variants={fadeUp}>
                    Menyalakan Api Seni, Menerangi Jiwa Budaya
                </motion.p>

                <motion.div
                    className={styles.heroDescription}
                    variants={fadeUp}
                >
                    <p>
                        Teater Bara adalah wadah ekspresi seni teater di
                        Banjarnegara yang berkomitmen untuk menghadirkan karya
                        pertunjukan yang presisi dan setiap ekspresi disucikan
                        menjadi pertunjukan yang sarat makna.
                    </p>
                </motion.div>

                <motion.div className={styles.heroButtons} variants={fadeUp}>
                    <a href="#about" className={styles.btnPrimary}>
                        Jelajahi Kami
                    </a>
                    <a href="#contact" className={styles.btnSecondary}>
                        Hubungi Kami
                    </a>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default HeroSection;
