"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLenis } from "lenis/react";

interface ScrollStickerProps {
    targetId: string;
    className?: string; // Allow custom positioning if needed
}

export default function ScrollSticker({ targetId, className = "bottom-8" }: ScrollStickerProps) {
    const lenis = useLenis();

    const handleScroll = () => {
        lenis?.scrollTo(targetId);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            onClick={handleScroll}
            className={`absolute ${className} left-1/2 -translate-x-1/2 cursor-pointer z-20 hover:scale-110 transition-transform duration-300`}
        >
            <Image
                src="/explore-sticker.gif"
                alt="Next Section"
                width={80}
                height={80}
                className="unoptimized"
                unoptimized
            />
        </motion.div>
    );
}
