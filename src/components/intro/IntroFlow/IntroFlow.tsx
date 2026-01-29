import React, { useState, useCallback } from "react";
import styles from "./IntroFlow.module.scss";

import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ReadyScreen from "../ReadyScreen/ReadyScreen";
import VideoIntro from "../VideoIntro/VideoIntro";

interface IntroFlowProps {
    onFinish: () => void;
}

type IntroStep = "loading" | "ready" | "video";

const IntroFlow: React.FC<IntroFlowProps> = ({ onFinish }) => {
    const [step, setStep] = useState<IntroStep>("loading");

    /* =========================
       STEP HANDLERS
    ========================== */

    const handleLoadingDone = useCallback(() => {
        setStep("ready");
    }, []);

    const handleReadyContinue = useCallback(() => {
        setStep("video");
    }, []);

    const handleVideoEnd = useCallback(() => {
        onFinish();
    }, [onFinish]);

    /* =========================
       RENDER
    ========================== */

    return (
        <div className={styles.introFlow}>
            {step === "loading" && (
                <LoadingScreen onFinish={handleLoadingDone} />
            )}

            {step === "ready" && (
                <ReadyScreen onContinue={handleReadyContinue} />
            )}

            {step === "video" && <VideoIntro onVideoEnd={handleVideoEnd} />}
        </div>
    );
};

export default IntroFlow;
