import React, { useEffect, useState, useRef } from "react";
import styles from "./Cursor.module.scss";

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const mousePosition = useRef({ x: 0, y: 0 });
    const followerRef = useRef({ x: 0, y: 0 });
    const animationFrameId = useRef<number>(0);

    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            mousePosition.current = { x: e.clientX, y: e.clientY };
            setPosition({ x: e.clientX, y: e.clientY });

            // Cek apakah element yang di-hover adalah clickable
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.onclick !== null ||
                target.classList.contains("clickable") ||
                window.getComputedStyle(target).cursor === "pointer";

            setIsPointer(isClickable);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        // Smooth animation loop untuk follower
        const animateFollower = () => {
            // Lerp factor: semakin kecil = semakin smooth (0.1 - 0.3 recommended)
            const lerpFactor = 0.15;

            // Linear interpolation untuk smooth movement
            followerRef.current.x +=
                (mousePosition.current.x - followerRef.current.x) * lerpFactor;
            followerRef.current.y +=
                (mousePosition.current.y - followerRef.current.y) * lerpFactor;

            setFollowerPosition({
                x: followerRef.current.x,
                y: followerRef.current.y,
            });

            animationFrameId.current = requestAnimationFrame(animateFollower);
        };

        document.addEventListener("mousemove", updateCursor);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);

        // Start animation loop
        animationFrameId.current = requestAnimationFrame(animateFollower);

        return () => {
            document.removeEventListener("mousemove", updateCursor);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);

            // Cancel animation frame
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    return (
        <>
            {/* Cursor Utama */}
            <div
                className={`${styles.cursor} ${isPointer ? styles.cursorPointer : ""} ${
                    isVisible ? styles.visible : ""
                }`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 640 640"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M206.86 245.15c-35.88 10.45-59.95 41.2-57.53 74.1 11.4-12.72 28.81-23.7 49.9-30.92l7.63-43.18zM95.81 295L64.08 115.49c-.29-1.62.28-2.62.24-2.65 57.76-32.06 123.12-49.01 189.01-49.01 1.61 0 3.23.17 4.85.19 13.95-13.47 31.73-22.83 51.59-26 18.89-3.02 38.05-4.55 57.18-5.32-9.99-13.95-24.48-24.23-41.77-27C301.27 1.89 277.24 0 253.32 0 176.66 0 101.02 19.42 33.2 57.06 9.03 70.48-3.92 98.48 1.05 126.58l31.73 179.51c14.23 80.52 136.33 142.08 204.45 142.08 3.59 0 6.75-.46 10.01-.8-13.52-17.08-28.94-40.48-39.5-67.58-47.61-12.98-106.06-51.62-111.93-84.79zm97.55-137.46c-.73-4.12-2.23-7.87-4.07-11.4-8.25 8.91-20.67 15.75-35.32 18.32-14.65 2.58-28.67.4-39.48-5.17-.52 3.94-.64 7.98.09 12.1 3.84 21.7 24.58 36.19 46.34 32.37 21.75-3.82 36.28-24.52 32.44-46.22zM606.8 120.9c-88.98-49.38-191.43-67.41-291.98-51.35-27.31 4.36-49.08 26.26-54.04 54.36l-31.73 179.51c-15.39 87.05 95.28 196.27 158.31 207.35 63.03 11.09 204.47-53.79 219.86-140.84l31.73-179.51c4.97-28.11-7.98-56.11-32.15-69.52zm-273.24 96.8c3.84-21.7 24.58-36.19 46.34-32.36 21.76 3.83 36.28 24.52 32.45 46.22-.73 4.12-2.23 7.87-4.07 11.4-8.25-8.91-20.67-15.75-35.32-18.32-14.65-2.58-28.67-.4-39.48 5.17-.53-3.95-.65-7.99.08-12.11zm70.47 198.76c-55.68-9.79-93.52-59.27-89.04-112.9 20.6 25.54 56.21 46.17 99.49 53.78 43.28 7.61 83.82.37 111.93-16.6-14.18 51.94-66.71 85.51-122.38 75.72zm130.3-151.34c-8.25-8.91-20.68-15.75-35.33-18.32-14.65-2.58-28.67-.4-39.48 5.17-.52-3.94-.64-7.98.09-12.1 3.84-21.7 24.58-36.19 46.34-32.37 21.75 3.83 36.28 24.52 32.45 46.22-.73 4.13-2.23 7.88-4.07 11.4z" />
                </svg>
            </div>

            {/* Cursor Trail/Follower */}
            <div
                className={`${styles.cursorFollower} ${isPointer ? styles.followerPointer : ""} ${
                    isVisible ? styles.visible : ""
                }`}
                style={{
                    left: `${followerPosition.x}px`,
                    top: `${followerPosition.y}px`,
                }}
            />
        </>
    );
};

export default CustomCursor;
