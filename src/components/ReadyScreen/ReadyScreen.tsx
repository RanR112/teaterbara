import React from "react";
import { ChevronDown } from "lucide-react";
import Logo from "../../assets/logo.png"
import styles from "./ReadyScreen.module.scss";

interface ReadyScreenProps {
    onContinue: () => void;
}

const ReadyScreen: React.FC<ReadyScreenProps> = ({ onContinue }) => {
    return (
        <div className={styles.readyScreen}>
            <div className={styles.content}>
                <div className={styles.logoPlaceholder}>
                    <img src={Logo} alt="Logo" />
                </div>

                <button className={styles.continueBtn} onClick={onContinue}>
                    <span>Click to Continue</span>
                    <ChevronDown className={styles.chevronIcon} size={24} />
                </button>
            </div>
        </div>
    );
};

export default ReadyScreen;
