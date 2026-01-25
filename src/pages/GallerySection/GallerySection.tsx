import React, { useEffect, useRef, useState } from "react";
import styles from "./GallerySection.module.scss";
import imageProp from "../../assets/logo.png";

interface GalleryItem {
    id: number;
    title: string;
    category: string;
    image: string;
    alt: string;
}

const GallerySection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const sectionRef = useRef<HTMLElement>(null);

    const categories = [
        "Semua",
        "Pertunjukan",
        "Latihan",
        "Behind The Scene",
        "Event",
    ];

    const galleryItems: GalleryItem[] = [
        {
            id: 1,
            title: "Pertunjukan Utama 2024",
            category: "Pertunjukan",
            image: imageProp,
            alt: "Image",
        },
        {
            id: 2,
            title: "Latihan Rutin",
            category: "Latihan",
            image: imageProp,
            alt: "Image",
        },
        {
            id: 3,
            title: "Backstage Moment",
            category: "Behind The Scene",
            image: imageProp,
            alt: "Image",
        },
        {
            id: 4,
            title: "Festival Teater",
            category: "Event",
            image: imageProp,
            alt: "Image",
        },
        {
            id: 5,
            title: "Monolog Performance",
            category: "Pertunjukan",
            image: imageProp,
            alt: "Image",
        },
        {
            id: 6,
            title: "Workshop Akting",
            category: "Latihan",
            image: imageProp,
            alt: "Image",
        },
        {
            id: 7,
            title: "Persiapan Panggung",
            category: "Behind The Scene",
            image: imageProp,
            alt: "Image",
        },
        {
            id: 8,
            title: "Pentas Kolaborasi",
            category: "Event",
            image: imageProp,
            alt: "Image",
        },
    ];

    const filteredItems =
        selectedCategory === "Semua"
            ? galleryItems
            : galleryItems.filter((item) => item.category === selectedCategory);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            className={`${styles.gallery} ${isVisible ? styles.visible : ""}`}
            id="gallery"
            ref={sectionRef}
        >
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        GALERI <span>KAMI</span>
                    </h2>
                    <div className={styles.titleUnderline}></div>
                    <p className={styles.sectionSubtitle}>
                        Dokumentasi perjalanan dan karya Teater Bara
                    </p>
                </div>

                <div className={styles.filterButtons}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`${styles.filterBtn} ${
                                selectedCategory === category
                                    ? styles.active
                                    : ""
                            }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className={styles.galleryGrid}>
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={styles.galleryItem}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.itemImage}>
                                <div className={styles.imagePlaceholder}>
                                    <img src={item.image} alt={item.alt} />
                                </div>
                                <div className={styles.itemOverlay}>
                                    <div className={styles.overlayContent}>
                                        <h3>{item.title}</h3>
                                        <span className={styles.category}>
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.viewMoreContainer}>
                    <button className={styles.viewMoreBtn}>
                        Lihat Selengkapnya
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <path
                                d="M5 10H15M15 10L10 5M15 10L10 15"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
