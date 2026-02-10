import React from "react";
import styles from "./Loader.module.scss";

type Props = {
    mode?: "idle" | "loading";
    text?: string;
};

const Loader: React.FC<Props> = ({ mode = "loading", text }) => {
    return (
        <div className={`${
                    mode === "idle" ? styles.idleWrapper : styles.wrapper
                }`}>
            {text && <p className={styles.text}>{text}</p>}

            <div
                className={`${styles.loader} ${
                    mode === "idle" ? styles.idle : ""
                }`}
            />
        </div>
    );
};

export default Loader;
