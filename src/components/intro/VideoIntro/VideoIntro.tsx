import React, { useEffect, useRef } from "react";
import styles from "./VideoIntro.module.scss";

import introVideo from "../../../assets/videos/intro.webm";

interface VideoIntroProps {
    onVideoEnd: () => void;
}

const VideoIntro: React.FC<VideoIntroProps> = ({ onVideoEnd }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Play video (user interaction already happened)
        const playPromise = video.play();

        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // fail silently (autoplay policy, etc)
            });
        }

        return () => {
            video.pause();
            video.currentTime = 0;
        };
    }, []);

    return (
        <div className={styles.videoSection}>
            <div className={styles.videoWrapper}>
                <video
                    ref={videoRef}
                    className={styles.introVideo}
                    onEnded={onVideoEnd}
                    playsInline
                >
                    <source src={introVideo} type="video/webm" />
                </video>
            </div>
        </div>
    );
};

export default VideoIntro;
