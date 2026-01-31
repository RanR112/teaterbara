import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { galleryApi } from "../services/gallery.service";
import { ALL_CATEGORY } from "../configs/gallery.config";
import type {
    Category,
    GalleryItem,
    ImageResponse,
} from "../types/gallery.types";

export const useGallery = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORY);
    const [showAll, setShowAll] = useState(false);
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    // State untuk data dari API
    const [categories, setCategories] = useState<Category[]>([]);
    const [allImages, setAllImages] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const sectionRef = useRef<HTMLElement>(null);
    const scrollYRef = useRef(0);

    // Fetch categories saat component mount
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setLoading(true);
                const categoriesData = await galleryApi.getCategories();
                setCategories(categoriesData);
                setError(null);
            } catch (err) {
                setError("Gagal memuat kategori");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    // Fetch images untuk semua kategori saat categories berubah
    useEffect(() => {
        if (categories.length === 0) return;

        const fetchAllImages = async () => {
            try {
                setLoading(true);

                // Fetch gambar dari semua kategori secara parallel
                const imagePromises = categories.map((category) =>
                    galleryApi
                        .getImagesByCategory(category.id)
                        .then((images) => ({
                            categoryId: category.id,
                            categoryName: category.name,
                            images,
                        })),
                );

                const results = await Promise.all(imagePromises);

                // Transform data menjadi GalleryItem[]
                const transformedImages: GalleryItem[] = [];
                results.forEach((result) => {
                    result.images.forEach((image: ImageResponse) => {
                        transformedImages.push({
                            id: image.id,
                            title: image.name.replace(/\.[^/.]+$/, ""), // Remove extension
                            category: result.categoryName,
                            image: image.url,
                            alt: image.name,
                        });
                    });
                });

                setAllImages(transformedImages);
                setError(null);
            } catch (err) {
                setError("Gagal memuat gambar");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAllImages();
    }, [categories]);

    // Filter items berdasarkan kategori yang dipilih
    const filteredItems = useMemo(() => {
        return selectedCategory === ALL_CATEGORY
            ? allImages
            : allImages.filter((item) => item.category === selectedCategory);
    }, [selectedCategory, allImages]);

    // Items yang ditampilkan (dengan limit 8 jika tidak show all)
    const displayedItems = useMemo(() => {
        return showAll ? filteredItems : filteredItems.slice(0, 8);
    }, [filteredItems, showAll]);

    // Preview item yang sedang dipilih
    const currentPreviewItem = useMemo(() => {
        return filteredItems.find((item) => item.id === previewImage);
    }, [filteredItems, previewImage]);

    // Categories untuk filter buttons (tambahkan "Semua" di awal)
    const filterCategories = useMemo(() => {
        return [ALL_CATEGORY, ...categories.map((cat) => cat.name)];
    }, [categories]);

    // Intersection Observer untuk animasi
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold: 0.1 },
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    // Handler untuk select category
    const handleSelectCategory = useCallback((category: string) => {
        setSelectedCategory(category);
        setShowAll(false);
    }, []);

    // Lock/unlock scroll saat preview image
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

    // Navigation untuk preview image
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

    // Keyboard navigation untuk preview
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
        filterCategories,
        loading,
        error,
    };
};
