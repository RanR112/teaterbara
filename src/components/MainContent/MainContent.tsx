import React from "react";
import styles from "./MainContent.module.scss";

const MainContent: React.FC = () => {
    return (
        <main className={styles.mainContent}>
            <section className={styles.hero}>
                <h1>Welcome to Our Website</h1>
                <p>Discover amazing experiences with us</p>
                <button className={styles.ctaButton}>Get Started</button>
            </section>

            <section className={styles.features}>
                <div className={styles.featureCard}>
                    <h3>Feature One</h3>
                    <p>
                        Amazing feature description here with all the details
                        you need to know
                    </p>
                </div>
                <div className={styles.featureCard}>
                    <h3>Feature Two</h3>
                    <p>
                        Another great feature to explore and discover new
                        possibilities
                    </p>
                </div>
                <div className={styles.featureCard}>
                    <h3>Feature Three</h3>
                    <p>
                        One more awesome feature that will enhance your
                        experience
                    </p>
                </div>
            </section>
        </main>
    );
};

export default MainContent;
