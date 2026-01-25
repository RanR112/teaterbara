import React, { useEffect, useRef, useState } from "react";
import styles from "./TeamSection.module.scss";
import imageProp from "../../assets/logo.png";

interface TeamMember {
    id: number;
    name: string;
    role: string;
    quote: string;
    image: string;
    alt: string;
}

const TeamSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const teamMembers: TeamMember[] = [
        {
            id: 1,
            name: "Ahmad Rizki",
            role: "Ketua Teater Bara",
            quote: "Seni adalah jembatan menuju pemahaman",
            image: imageProp,
            alt: "Image",
        },
        {
            id: 2,
            name: "Siti Nurhaliza",
            role: "Sutradara Utama",
            quote: "Setiap pentas adalah cerita yang hidup",
            image: imageProp,
            alt: "Image",
        },
        {
            id: 3,
            name: "Budi Santoso",
            role: "Koordinator Pelatihan",
            quote: "Latihan adalah kunci kesempurnaan",
            image: imageProp,
            alt: "Image",
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
            className={`${styles.team} ${isVisible ? styles.visible : ""}`}
            id="team"
            ref={sectionRef}
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
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.id}
                            className={styles.memberCard}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className={styles.cardInner}>
                                <div className={styles.cardFront}>
                                    <div className={styles.memberImage}>
                                        <img src={member.image} alt={member.alt} />
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
