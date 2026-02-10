import React, { useEffect, useState } from "react";
import IntroFlow from "./components/intro/IntroFlow/IntroFlow";
import Initializing from "./components/Initializing/Initializing";

import MainLayout from "./components/layouts/MainLayout";
import MainContent from "./pages/MainContent/MainContent";
import Cursor from "./components/ui/Cursor/Cursor";

type Phase = "init" | "intro" | "main";

const App: React.FC = () => {
    const [phase, setPhase] = useState<Phase>("init");

    const isDesktop = window.innerWidth >= 1024;

    /* =========================
       INIT LOADER (typing animation)
    ========================== */
    useEffect(() => {
        const timer = setTimeout(() => {
            if (isDesktop) setPhase("intro");
            else setPhase("main");
        }, 1000);

        return () => clearTimeout(timer);
    }, [isDesktop]);

    return (
        <>
            <Cursor />
            <MainLayout>
                <MainContent />
            </MainLayout>

            {phase === "init" && <Initializing />}

            {phase === "intro" && (
                <IntroFlow onFinish={() => setPhase("main")} />
            )}
        </>
    );
};

export default App;
