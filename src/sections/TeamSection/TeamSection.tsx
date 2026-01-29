import React from "react";
import styles from "./TeamSection.module.scss";
import { useSectionObserver } from "../../hooks/useSectionObserver";
import { TEAM_MEMBER } from "../../configs/team.config";

const TeamSection: React.FC = () => {
    const { ref, isVisible } = useSectionObserver({ threshold: 0.2 });

    return (
        <section
            className={`${styles.team} ${isVisible ? styles.visible : ""}`}
            id="team"
            ref={ref}
        >
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        TIM <span>KAMI</span>
                    </h2>
                    <div className={styles.titleUnderline}></div>
                    <p className={styles.sectionSubtitle}>
                        Jiwa-jiwa kreatif di balik setiap pertunjukan
                    </p>
                </div>

                <div className={styles.teamGrid}>
                    {TEAM_MEMBER.map((member, index) => (
                        <div
                            key={member.id}
                            className={styles.memberCard}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className={styles.cardInner}>
                                <div className={styles.cardFront}>
                                    <div className={styles.memberImage}>
                                        <img
                                            src={member.image}
                                            alt={member.alt}
                                        />
                                    </div>
                                    <div className={styles.memberInfo}>
                                        <h3 className={styles.memberName}>
                                            {member.name}
                                        </h3>
                                        <p className={styles.memberRole}>
                                            {member.role}
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.cardBack}>
                                    <div className={styles.quoteIcon}>"</div>
                                    <p className={styles.memberQuote}>
                                        {member.quote}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
