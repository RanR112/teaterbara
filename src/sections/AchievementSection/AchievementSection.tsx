import React from "react";
import styles from "./AchievementSection.module.scss";
import { useSectionObserver } from "../../hooks/useSectionObserver";
import { ACHIEVEMENT_ITEMS } from "../../configs/achievement.config";

const AchievementSection: React.FC = () => {
    const { ref, isVisible } = useSectionObserver({ threshold: 0.2 });

    return (
        <section
            className={`${styles.achievement} ${isVisible ? styles.visible : ""}`}
            id="achievements"
            ref={ref}
        >
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        PENCAPAIAN <span>KAMI</span>
                    </h2>
                    <div className={styles.titleUnderline}></div>
                    <p className={styles.sectionSubtitle}>
                        Perjalanan prestasi dan dedikasi dalam berkarya
                    </p>
                </div>

                <div className={styles.timeline}>
                    {ACHIEVEMENT_ITEMS.map((achievement, index) => (
                        <div
                            key={achievement.id}
                            className={styles.timelineItem}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className={styles.timelineMarker}>
                                <div className={styles.markerDot}></div>
                                <div className={styles.markerLine}></div>
                            </div>

                            <div className={styles.timelineContent}>
                                <div className={styles.yearBadge}>
                                    {achievement.year}
                                </div>
                                <h3 className={styles.achievementTitle}>
                                    {achievement.title}
                                </h3>
                                <p className={styles.achievementDescription}>
                                    {achievement.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementSection;
