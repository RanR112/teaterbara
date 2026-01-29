import { useState, useCallback } from "react";
import { NAV_ITEMS } from "../configs/navbar.config";
import { useHeroScroll } from "./useHeroScroll";
import { useActiveSection } from "./useActiveSection";
import { useScrollLock } from "./useScrollLock";

export function useNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrolled = useHeroScroll("home");
    const activeItem = useActiveSection(NAV_ITEMS.map((i) => i.id));

    useScrollLock(isMenuOpen);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen((v) => !v);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    return {
        isMenuOpen,
        scrolled,
        activeItem,
        navItems: NAV_ITEMS,
        toggleMenu,
        closeMenu,
    };
}
