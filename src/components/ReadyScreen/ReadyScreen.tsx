import React from "react";
import { ChevronDown } from "lucide-react";
import Logo from "../../assets/logo.png";
import styles from "./ReadyScreen.module.scss";
import LightRays from "../LightRays/LightRays";

interface ReadyScreenProps {
    onContinue: () => void;
}

const ReadyScreen: React.FC<ReadyScreenProps> = ({ onContinue }) => {
    return (
        <div className={styles.readyScreen}>
            {/* Floating particles background */}
            <div className={styles.particlesContainer}>
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className={styles.particle}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Light rays with radial gradient overlay */}
            <div className={styles.lightBackground}>
                <div className={styles.radialOverlay} />
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={1}
                    lightSpread={0.5}
                    rayLength={3}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0}
                    distortion={0}
                    className="custom-rays"
                    pulsating={false}
                    fadeDistance={1}
                    saturation={1}
                />
            </div>

            <div className={styles.content}>
                {/* Logo with glow effect */}
                <div className={styles.logoPlaceholder}>
                    <div className={styles.logoGlow} />
                    <div className={styles.logoRing} />
                    <img src={Logo} alt="Logo" />
                </div>

                {/* Enhanced continue button */}
                <button className={styles.continueBtn} onClick={onContinue}>
                    <span className={styles.btnText}>Click to Continue</span>
                    <div className={styles.iconWrapper}>
                        <ChevronDown className={styles.chevronIcon} size={24} />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default ReadyScreen;
