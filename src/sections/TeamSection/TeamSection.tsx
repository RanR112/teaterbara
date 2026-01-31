import React from "react";
import { motion } from "framer-motion";
import styles from "./TeamSection.module.scss";
import { TEAM_MEMBER } from "../../configs/team.config";
import { staggerContainer, fadeUp } from "../../animations/variants";

const TeamSection: React.FC = () => {
    return (
        <motion.section
            className={styles.team}
            id="team"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className={styles.container}>
                {/* ===== Header ===== */}
                <motion.div className={styles.sectionHeader} variants={fadeUp}>
                    <h2 className={styles.sectionTitle}>
                        TIM <span>KAMI</span>
                    </h2>
                    <div className={styles.titleUnderline}></div>
                    <p className={styles.sectionSubtitle}>
                        Jiwa-jiwa kreatif di balik setiap pertunjukan
                    </p>
                </motion.div>

                {/* ===== Grid ===== */}
                <motion.div
                    className={styles.teamGrid}
                    variants={staggerContainer}
                >
                    {TEAM_MEMBER.map((member) => (
                        <motion.div
                            key={member.id}
                            className={styles.memberCard}
                            variants={fadeUp}
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
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default TeamSection;
