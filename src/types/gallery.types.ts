// Response types dari API
export interface CategoryResponse {
    id: string;
    name: string;
}

export interface ImageResponse {
    id: string;
    name: string;
    url: string;
}

// Types untuk aplikasi
export interface GalleryItem {
    id: string;
    title: string;
    category: string;
    image: string;
    alt: string;
}

export interface Category {
    id: string;
    name: string;
}
