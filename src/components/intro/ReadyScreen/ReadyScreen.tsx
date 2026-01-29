import React, { useMemo } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./ReadyScreen.module.scss";

import Logo from "../../../assets/images/logo.png";
import LightRays from "../../../visuals/LightRays/LightRays";

interface ReadyScreenProps {
    onContinue: () => void;
}

const PARTICLE_COUNT = 20;

const createParticles = () =>
    Array.from({ length: PARTICLE_COUNT }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${5 + Math.random() * 5}s`,
    }));

const LIGHT_RAYS_CONFIG = {
    raysOrigin: "top-center",
    raysColor: "#ffffff",
    raysSpeed: 1,
    lightSpread: 0.5,
    rayLength: 3,
    followMouse: true,
    mouseInfluence: 0.1,
    noiseAmount: 0,
    distortion: 0,
    pulsating: false,
    fadeDistance: 1,
    saturation: 1,
} as const;

const ReadyScreen: React.FC<ReadyScreenProps> = ({ onContinue }) => {
    const particles = useMemo(() => createParticles(), []);

    return (
        <div className={styles.readyScreen}>
            {/* Floating particles background */}
            <div className={styles.particlesContainer}>
                {particles.map((style, i) => (
                    <div key={i} className={styles.particle} style={style} />
                ))}
            </div>

            {/* Light rays background */}
            <div className={styles.lightBackground}>
                <div className={styles.radialOverlay} />
                <LightRays {...LIGHT_RAYS_CONFIG} className="custom-rays" />
            </div>

            <div className={styles.content}>
                {/* Logo */}
                <div className={styles.logoPlaceholder}>
                    <div className={styles.logoGlow} />
                    <div className={styles.logoRing} />
                    <img src={Logo} alt="Logo" />
                </div>

                {/* Continue button */}
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
