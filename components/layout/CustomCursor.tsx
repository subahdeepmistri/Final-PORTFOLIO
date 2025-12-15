"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleHoverStart = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button, .interactive')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        }

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleHoverStart); // Use mouseover delegating to window for broader catch

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleHoverStart);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Main Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    backgroundColor: isHovered ? "white" : "white",
                    scale: isHovered ? 2 : 0.5,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
            {/* Trailing Ring - Optional, keeping it simple for now, just the dot scaling is effective for "cinematic" */}
        </>
    );
}
