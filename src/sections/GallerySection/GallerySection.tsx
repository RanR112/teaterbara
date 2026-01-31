import React from "react";
import { motion } from "framer-motion";
import styles from "./GallerySection.module.scss";
import { useGallery } from "../../hooks/useGallery";
import { staggerContainer, fadeUp } from "../../animations/variants";

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
        filterCategories,
        loading,
        error,
    } = useGallery();

    return (
        <>
            {/* ================= SECTION ================= */}
            <motion.section
                id="gallery"
                ref={sectionRef}
                className={`${styles.gallery} ${
                    isVisible ? styles.visible : ""
                }`}
                variants={staggerContainer}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
            >
                <div className={styles.container}>
                    {/* ================= HEADER ================= */}
                    <motion.div
                        className={styles.sectionHeader}
                        variants={fadeUp}
                    >
                        <h2 className={styles.sectionTitle}>
                            GALERI <span>KAMI</span>
                        </h2>

                        <div className={styles.titleUnderline} />

                        <p className={styles.sectionSubtitle}>
                            Dokumentasi perjalanan dan karya Teater Bara
                        </p>
                    </motion.div>

                    {/* ================= LOADING ================= */}
                    {loading && (
                        <motion.div
                            className={styles.loadingContainer}
                            variants={fadeUp}
                        >
                            <p>Memuat galeri...</p>
                        </motion.div>
                    )}

                    {/* ================= ERROR ================= */}
                    {error && !loading && (
                        <motion.div
                            className={styles.errorContainer}
                            variants={fadeUp}
                        >
                            <p>{error}</p>
                        </motion.div>
                    )}

                    {/* ================= FILTER BUTTONS ================= */}
                    {!loading && !error && (
                        <motion.div
                            className={styles.filterButtons}
                            variants={fadeUp}
                        >
                            {filterCategories.map((category) => (
                                <button
                                    key={category}
                                    className={`${styles.filterBtn} ${
                                        selectedCategory === category
                                            ? styles.active
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setSelectedCategory(category)
                                    }
                                >
                                    {category}
                                </button>
                            ))}
                        </motion.div>
                    )}

                    {/* ================= GRID ================= */}
                    {!loading && !error && (
                        <>
                            <motion.div
                                className={styles.galleryGrid}
                                variants={staggerContainer}
                            >
                                {displayedItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        className={styles.galleryItem}
                                        variants={fadeUp}
                                        whileHover={{ scale: 1.03 }}
                                    >
                                        <div
                                            className={styles.itemImage}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setPreviewImage(item.id);
                                            }}
                                        >
                                            <div
                                                className={
                                                    styles.imagePlaceholder
                                                }
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.alt}
                                                />
                                            </div>

                                            <div className={styles.itemOverlay}>
                                                <div
                                                    className={
                                                        styles.overlayContent
                                                    }
                                                >
                                                    <h3>{item.title}</h3>
                                                    <span
                                                        className={
                                                            styles.category
                                                        }
                                                    >
                                                        {item.category}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* ================= VIEW MORE ================= */}
                            {filteredItems.length > 8 && (
                                <motion.div
                                    className={styles.viewMoreContainer}
                                    variants={fadeUp}
                                >
                                    <button
                                        className={styles.viewMoreBtn}
                                        onClick={() => setShowAll(!showAll)}
                                    >
                                        {showAll
                                            ? "Tampilkan Lebih Sedikit"
                                            : "Lihat Selengkapnya"}

                                        <motion.svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            animate={{
                                                rotate: showAll ? 180 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <path
                                                d="M5 10H15M15 10L10 5M15 10L10 15"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </motion.svg>
                                    </button>
                                </motion.div>
                            )}
                        </>
                    )}

                    {/* ================= EMPTY ================= */}
                    {!loading && !error && displayedItems.length === 0 && (
                        <motion.div
                            className={styles.emptyContainer}
                            variants={fadeUp}
                        >
                            <p>Tidak ada gambar untuk kategori ini</p>
                        </motion.div>
                    )}
                </div>
            </motion.section>

            {/* ================= MODAL ================= */}
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
