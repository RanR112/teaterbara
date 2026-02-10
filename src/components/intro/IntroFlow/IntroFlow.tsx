import React, { useState, useCallback, Suspense, useEffect } from "react";
import styles from "./IntroFlow.module.scss";

import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ReadyScreen from "../ReadyScreen/ReadyScreen";
const VideoIntro = React.lazy(() => import("../VideoIntro/VideoIntro"));

interface IntroFlowProps {
    onFinish: () => void;
}

type IntroStep = "loading" | "ready" | "video";

const IntroFlow: React.FC<IntroFlowProps> = ({ onFinish }) => {
    const [step, setStep] = useState<IntroStep>("loading");

    useEffect(() => {
        if (step === "ready") {
            import("../VideoIntro/VideoIntro");
        }
    }, [step]);

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

            {step === "video" && (
                <Suspense fallback={null}>
                    <VideoIntro onVideoEnd={handleVideoEnd} />
                </Suspense>
            )}
        </div>
    );
};

export default IntroFlow;
