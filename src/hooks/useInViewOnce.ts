import { useEffect, useRef, useState } from "react";

export function useInViewOnce<T extends HTMLElement>(
    options?: IntersectionObserverInit,
) {
    const ref = useRef<T | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!ref.current || visible) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px",
                ...options,
            },
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [visible, options]);

    return { ref, visible };
}
