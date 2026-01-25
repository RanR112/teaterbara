import React from "react";
import styles from "./LoadingScreen.module.scss";
import { GridScan } from "../GridScan/GridScan";
import Loader from "../Loader/Loader";

const LoadingScreen: React.FC = () => {
    return (
        <div className={styles.loadingScreen}>
            <div className={styles.gridBackground}>
                <GridScan
                    sensitivity={0.55}
                    lineThickness={1}
                    linesColor="#6e6e6e"
                    gridScale={0.1}
                    scanColor="#e6e6e6"
                    scanOpacity={0.4}
                    enablePost
                    bloomIntensity={0.6}
                    chromaticAberration={0.002}
                    noiseIntensity={0.01}
                />
            </div>
            <div className={styles.loader}>
                <Loader />
            </div>
        </div>
    );
};

export default LoadingScreen;
