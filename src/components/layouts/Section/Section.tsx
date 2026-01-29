import React from "react";
import styles from "./Section.module.scss";
import type { SectionProps } from "../../../types/section.types";

const Section: React.FC<SectionProps> = ({ id, children }) => {
    return (
        <section id={id} className={styles.section}>
            {children}
        </section>
    );
};

export default Section;
