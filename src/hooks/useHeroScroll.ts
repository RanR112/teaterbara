import { useEffect, useState } from "react";

export function useHeroScroll(heroId: string) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const hero = document.getElementById(heroId);
        if (!hero) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setScrolled(!entry.isIntersecting);
            },
            {
                rootMargin: "-70% 0px 0px 0px",
                threshold: 0,
            },
        );

        observer.observe(hero);
        return () => observer.disconnect();
    }, [heroId]);

    return scrolled;
}
