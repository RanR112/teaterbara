import { useEffect, useRef, useState } from "react";

interface ObserverOptions extends IntersectionObserverInit {
    once?: boolean;
}

export const useSectionObserver = ({
    threshold = 0.1,
    rootMargin = "0px 0px -100px 0px",
    once = true,
}: ObserverOptions = {}) => {
    const ref = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    if (once) observer.disconnect();
                }
            },
            { threshold, rootMargin },
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return { ref, isVisible };
};
