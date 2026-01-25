import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import ReadyScreen from "./components/ReadyScreen/ReadyScreen";
import VideoIntro from "./components/VideoIntro/VideoIntro";
import Navbar from "./components/Navbar/Navbar";
import MainContent from "./pages/MainContent/MainContent";
import "./App.css";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
    const [stage, setStage] = useState<"loading" | "ready" | "video" | "main">(
        "loading",
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setStage("ready");
        }, 3900);

        return () => clearTimeout(timer);
    }, []);

    const handleStartVideo = () => {
        setStage("video");
    };

    const handleVideoEnd = () => {
        const timer = setTimeout(() => {
            setStage("main");
        }, 1000);

        return () => clearTimeout(timer);
    };

    return (
        <div className="app">
            {stage === "loading" && <LoadingScreen />}

            {stage === "ready" && <ReadyScreen onContinue={handleStartVideo} />}

            {stage === "video" && <VideoIntro onVideoEnd={handleVideoEnd} />}

            {stage === "main" && (
                <>
                    <Navbar />
                    <MainContent />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default App;
