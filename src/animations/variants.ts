import type { Variants } from "framer-motion";

/* Container (stagger children) */
export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

/* Fade Up */
export const fadeUp: Variants = {
    hidden: {
        y: 40,
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

/* Fade Left */
export const fadeLeft: Variants = {
    hidden: {
        x: -40,
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

/* Fade Right */
export const fadeRight: Variants = {
    hidden: {
        x: 40,
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

/* Scale In */
export const scaleIn: Variants = {
    hidden: {
        scale: 0.9,
    },
    visible: {
        scale: 1,
        transition: {
            duration: 0.6,
        },
    },
};
