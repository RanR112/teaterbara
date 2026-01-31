import type { CategoryResponse, ImageResponse } from "../types/gallery.types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const galleryApi = {
    /**
     * Mengambil semua kategori dari backend
     */
    async getCategories(): Promise<CategoryResponse[]> {
        try {
            const response = await fetch(`${API_BASE_URL}/gallery/categories`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetching categories:", error);
            throw error;
        }
    },

    /**
     * Mengambil gambar berdasarkan folder ID (category ID)
     */
    async getImagesByCategory(folderId: string): Promise<ImageResponse[]> {
        try {
            const response = await fetch(`${API_BASE_URL}/gallery/${folderId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(
                `Error fetching images for category ${folderId}:`,
                error,
            );
            throw error;
        }
    },
};
