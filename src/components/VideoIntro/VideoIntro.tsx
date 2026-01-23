import React, { useRef, useEffect } from "react";
import styles from "./VideoIntro.module.scss";
import introVideo from '../../assets/videos/intro.webm';

interface VideoIntroProps {
    onVideoEnd: () => void;
}

const VideoIntro: React.FC<VideoIntroProps> = ({ onVideoEnd }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            // Play video dengan audio karena sudah ada user interaction (click button)
            videoRef.current.play().catch((error) => {
                console.error("Error playing video:", error);
            });
        }
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
