import React from "react";
import CountUp from "../../components/ui/CountUp/CountUp";
import styles from "./AboutSection.module.scss";
import type { StatProps } from "../../types/stat.types";

export const Stat: React.FC<StatProps> = ({ value, label }) => (
    <div className={styles.statCard}>
        <div className={styles.statNumber}>
            <CountUp from={0} to={value} duration={1} />+
        </div>
        <div className={styles.statLabel}>{label}</div>
    </div>
);
