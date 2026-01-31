import React from "react";
import { motion } from "framer-motion";
import styles from "./AchievementSection.module.scss";
import { ACHIEVEMENT_ITEMS } from "../../configs/achievement.config";
import { staggerContainer, fadeUp } from "../../animations/variants";

const AchievementSection: React.FC = () => {
    return (
        <motion.section
            className={styles.achievement}
            id="achievements"
            variants={staggerContainer}
            initial="hidden"
            animate="visible" // ← langsung visible, no observer
        >
            <div className={styles.container}>
                <motion.div className={styles.sectionHeader} variants={fadeUp}>
                    <h2 className={styles.sectionTitle}>
                        PENCAPAIAN <span>KAMI</span>
                    </h2>
                    <div className={styles.titleUnderline} />
                    <p className={styles.sectionSubtitle}>
                        Perjalanan prestasi dan dedikasi dalam berkarya
                    </p>
                </motion.div>

                <motion.div
                    className={styles.timeline}
                    variants={staggerContainer}
                >
                    {ACHIEVEMENT_ITEMS.map((achievement) => (
                        <motion.div
                            key={achievement.id}
                            className={styles.timelineItem}
                            variants={fadeUp}
                        >
                            <div className={styles.timelineMarker}>
                                <div className={styles.markerDot} />
                                <div className={styles.markerLine} />
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
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default AchievementSection;
