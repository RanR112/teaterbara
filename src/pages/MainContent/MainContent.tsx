import React, { useEffect, useRef } from "react";
import HeroSection from "../HeroSection/HeroSection";
import AboutSection from "../AboutSection/AboutSection";
import GallerySection from "../GallerySection/GallerySection";
import AchievementSection from "../AchievementSection/AchievementSection";
import TeamSection from "../TeamSection/TeamSection";
import ContactSection from "../ContactSection/ContactSection";
import styles from "./MainContent.module.scss";
import Aurora from "../../components/Aurora/Aurora";

const MainContent: React.FC = () => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -100px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                }
            });
        }, observerOptions);

        const sections = contentRef.current?.querySelectorAll(
            `.${styles.section}`,
        );
        sections?.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.mainContent} ref={contentRef}>
            <div className={styles.mainBackground}>
                <Aurora
                    colorStops={["#FF6A5A", "#FFB347", "#FFE194"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={1}
                />
            </div>

            <div className={styles.content}>
                <HeroSection />
                <AboutSection />
                <GallerySection />
                <AchievementSection />
                <TeamSection />
                <ContactSection />
                {/* <Footer /> */}
            </div>
        </div>
    );
};

export default MainContent;
