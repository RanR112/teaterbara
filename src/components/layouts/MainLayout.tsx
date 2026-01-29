import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default MainLayout;
