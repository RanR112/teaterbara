import React from "react";
import styles from "./Loader.module.scss";

const Loader: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.loader} />
        </div>
    );
};

export default Loader;
