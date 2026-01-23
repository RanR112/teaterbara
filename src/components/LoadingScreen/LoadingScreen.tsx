import React from "react";
import styles from "./LoadingScreen.module.scss";

const LoadingScreen: React.FC = () => {
    return (
        <div className={styles.loadingScreen}>
            <div className={styles.loader}>
                <div className={styles.spinner}></div>
                <p className={styles.text}>Loading...</p>
            </div>
        </div>
    );
};

export default LoadingScreen;
