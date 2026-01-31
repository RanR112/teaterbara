import React from "react";
import HeroSection from "../../sections/HeroSection/HeroSection";
import AboutSection from "../../sections/AboutSection/AboutSection";
import GallerySection from "../../sections/GallerySection/GallerySection";
import AchievementSection from "../../sections/AchievementSection/AchievementSection";
// import TeamSection from "../../sections/TeamSection/TeamSection";
import ContactSection from "../../sections/ContactSection/ContactSection";
import Aurora from "../../visuals/Aurora/Aurora";
import styles from "./MainContent.module.scss";

const MainContent: React.FC = () => {
    return (
        <div className={styles.mainContent}>
            <div className={styles.mainBackground}>
                <Aurora
                    colorStops={["#FF6A5A", "#FFB347", "#FFE194"]}
                    blend={0.5}
                    amplitude={0.8}
                    speed={0.7}
                />
            </div>

            <div className={styles.content}>
                <HeroSection />
                <AboutSection />
                <GallerySection />
                <AchievementSection />
                {/* <TeamSection /> */}
                <ContactSection />
            </div>
        </div>
    );
};

export default MainContent;
