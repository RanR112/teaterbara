import React from "react";
import styles from "./GallerySection.module.scss";
import { useGallery } from "../../hooks/useGallery";
import { CATEGORIES } from "../../configs/gallery.config";

const GallerySection: React.FC = () => {
    const {
        sectionRef,
        isVisible,
        selectedCategory,
        setSelectedCategory,
        showAll,
        setShowAll,
        previewImage,
        setPreviewImage,
        filteredItems,
        displayedItems,
        currentPreviewItem,
        handlePrevImage,
        handleNextImage,
    } = useGallery();

    return (
        <>
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
                        {CATEGORIES.map((category) => (
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
                        {displayedItems.map((item, index) => (
                            <div
                                key={item.id}
                                className={styles.galleryItem}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div
                                    className={styles.itemImage}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setPreviewImage(item.id);
                                    }}
                                >
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

                    {filteredItems.length > 8 && (
                        <div className={styles.viewMoreContainer}>
                            <button
                                className={styles.viewMoreBtn}
                                onClick={() => setShowAll(!showAll)}
                            >
                                {showAll
                                    ? "Tampilkan Lebih Sedikit"
                                    : "Lihat Selengkapnya"}
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    style={{
                                        transform: showAll
                                            ? "rotate(180deg)"
                                            : "rotate(0deg)",
                                        transition: "transform 0.3s ease",
                                    }}
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
                    )}
                </div>
            </section>

            {previewImage !== null && currentPreviewItem && (
                <div
                    className={styles.imagePreview}
                    onClick={() => setPreviewImage(null)}
                >
                    <button
                        className={styles.closeBtn}
                        onClick={() => setPreviewImage(null)}
                        aria-label="Close preview"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M18 6L6 18M6 6L18 18"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <button
                        className={`${styles.navBtn} ${styles.prevBtn}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            handlePrevImage();
                        }}
                        aria-label="Previous image"
                    >
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M15 18L9 12L15 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <button
                        className={`${styles.navBtn} ${styles.nextBtn}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleNextImage();
                        }}
                        aria-label="Next image"
                    >
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M9 18L15 12L9 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <div
                        className={styles.previewContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={currentPreviewItem.image}
                            alt={currentPreviewItem.alt}
                        />
                        <div className={styles.previewInfo}>
                            <h3>{currentPreviewItem.title}</h3>
                            <span className={styles.previewCategory}>
                                {currentPreviewItem.category}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GallerySection;
