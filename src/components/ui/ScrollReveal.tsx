"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right" | "none";
    delay?: number; // Delay in milliseconds
    duration?: number; // Duration in seconds
    className?: string;
}

export default function ScrollReveal({
    children,
    direction = "up",
    delay = 0,
    duration = 0.8,
    className = "",
}: ScrollRevealProps) {
    const getVariants = () => {
        switch (direction) {
            case "up":
                return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
            case "down":
                return { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } };
            case "left":
                return { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
            case "right":
                return { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };
            case "none":
                return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
        }
    };

    // Convert milliseconds to seconds for framer-motion delay
    const delayInSeconds = delay / 1000;

    return (
        <motion.div
            className={className}
            variants={getVariants()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }} // Triggers when 100px inside viewport
            transition={{
                duration,
                delay: delayInSeconds,
                ease: [0.16, 1, 0.3, 1], // Expert-level premium bezier curve (smooth enter)
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
                }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
