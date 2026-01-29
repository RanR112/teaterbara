import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { GALLERY_ITEMS } from "../configs/gallery.config";

export const useGallery = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const [showAll, setShowAll] = useState(false);
    const [previewImage, setPreviewImage] = useState<number | null>(null);

    const sectionRef = useRef<HTMLElement>(null);
    const scrollYRef = useRef(0);

    const filteredItems = useMemo(() => {
        return selectedCategory === "Semua"
            ? GALLERY_ITEMS
            : GALLERY_ITEMS.filter(
                  (item) => item.category === selectedCategory,
              );
    }, [selectedCategory]);

    const displayedItems = useMemo(() => {
        return showAll ? filteredItems : filteredItems.slice(0, 8);
    }, [filteredItems, showAll]);

    const currentPreviewItem = useMemo(() => {
        return filteredItems.find((item) => item.id === previewImage);
    }, [filteredItems, previewImage]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold: 0.1 },
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const handleSelectCategory = useCallback((category: string) => {
        setSelectedCategory(category);
        setShowAll(false);
    }, []);

    useEffect(() => {
        if (previewImage !== null) {
            scrollYRef.current = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollYRef.current}px`;
            document.body.style.width = "100%";
        } else {
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
            window.scrollTo(0, scrollYRef.current);
        }
    }, [previewImage]);

    const handlePrevImage = useCallback(() => {
        if (previewImage === null) return;
        const index = filteredItems.findIndex(
            (item) => item.id === previewImage,
        );
        setPreviewImage(
            filteredItems[index > 0 ? index - 1 : filteredItems.length - 1].id,
        );
    }, [previewImage, filteredItems]);

    const handleNextImage = useCallback(() => {
        if (previewImage === null) return;
        const index = filteredItems.findIndex(
            (item) => item.id === previewImage,
        );
        setPreviewImage(
            filteredItems[index < filteredItems.length - 1 ? index + 1 : 0].id,
        );
    }, [previewImage, filteredItems]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (previewImage === null) return;
            if (e.key === "Escape") setPreviewImage(null);
            if (e.key === "ArrowLeft") handlePrevImage();
            if (e.key === "ArrowRight") handleNextImage();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [previewImage, handlePrevImage, handleNextImage]);

    return {
        sectionRef,
        isVisible,
        selectedCategory,
        setSelectedCategory: handleSelectCategory,
        showAll,
        setShowAll,
        previewImage,
        setPreviewImage,
        filteredItems,
        displayedItems,
        currentPreviewItem,
        handlePrevImage,
        handleNextImage,
    };
};
