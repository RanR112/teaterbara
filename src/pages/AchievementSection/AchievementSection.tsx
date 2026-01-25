import React, { useEffect, useRef, useState } from "react";
import styles from "./AchievementSection.module.scss";

interface Achievement {
    id: number;
    year: string;
    title: string;
    description: string;
}

const AchievementSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const achievements: Achievement[] = [
        {
            id: 1,
            year: "2024",
            title: "Juara 1 Festival Teater Nasional",
            description:
                "Meraih penghargaan tertinggi dengan pertunjukan 'Sang Penerang'",
        },
        {
            id: 2,
            year: "2023",
            title: "Best Director Award",
            description:
                "Penghargaan sutradara terbaik di Kompetisi Teater Regional",
        },
        {
            id: 3,
            year: "2023",
            title: "Kolaborasi Internasional",
            description:
                "Pertunjukan bersama dengan teater dari Malaysia dan Singapura",
        },
        {
            id: 4,
            year: "2022",
            title: "10 Tahun Teater Bara",
            description:
                "Perayaan satu dekade berkarya dengan pertunjukan spektakuler",
        },
        {
            id: 5,
            year: "2021",
            title: "Penghargaan Kebudayaan",
            description: "Apresiasi dari Kementerian Pendidikan dan Kebudayaan",
        },
        {
            id: 6,
            year: "2020",
            title: "Teater Virtual Terbaik",
            description: "Inovasi pertunjukan online di masa pandemi",
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            className={`${styles.achievement} ${isVisible ? styles.visible : ""}`}
            id="achievements"
            ref={sectionRef}
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
                    {achievements.map((achievement, index) => (
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
