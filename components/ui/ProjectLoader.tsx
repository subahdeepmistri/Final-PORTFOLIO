"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectLoader() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4"
        >
            <div className="relative w-full max-w-sm aspect-video">
                <Image
                    src="/project-loader.gif"
                    alt="Loading Project..."
                    fill
                    className="object-contain unoptimized"
                    unoptimized
                    priority
                />
            </div>
        </motion.div>
    );
}
