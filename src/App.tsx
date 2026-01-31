// import React, { useState } from "react";
import React from "react";
// import IntroFlow from "./components/intro/IntroFlow/IntroFlow";
import MainLayout from "./components/layouts/MainLayout";
import MainContent from "./pages/MainContent/MainContent";

const App: React.FC = () => {
    // const [introDone, setIntroDone] = useState(false);

    return (
        <>
            {/* {!introDone && <IntroFlow onFinish={() => setIntroDone(true)} />}

            {introDone && (
                <MainLayout>
                    <MainContent />
                </MainLayout>
            )} */}

            <MainLayout>
                <MainContent />
            </MainLayout>
        </>
    );
};

export default App;
