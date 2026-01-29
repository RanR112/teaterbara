import React, { useEffect } from "react";
import styles from "./LoadingScreen.module.scss";

import { GridScan } from "../../../visuals/GridScan/GridScan";
import Loader from "../Loader/Loader";

const GRID_SCAN_CONFIG = {
    sensitivity: 0.55,
    lineThickness: 1,
    linesColor: "#6e6e6e",
    gridScale: 0.1,
    scanColor: "#e6e6e6",
    scanOpacity: 0.4,
    enablePost: true,
    bloomIntensity: 0.6,
    chromaticAberration: 0.002,
    noiseIntensity: 0.01,
} as const;

interface LoadingScreenProps {
    onFinish: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(onFinish, 4000);
        return () => clearTimeout(timer);
    }, [onFinish]);
    return (
        <div className={styles.loadingScreen}>
            <div className={styles.gridBackground}>
                <GridScan {...GRID_SCAN_CONFIG} />
            </div>

            <div className={styles.loader}>
                <Loader />
            </div>
        </div>
    );
};

export default LoadingScreen;
