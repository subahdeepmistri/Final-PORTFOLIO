"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroBackground from "@/components/ui/HeroBackground";
import { useLenis } from "lenis/react";

export default function Hero() {
    const lenis = useLenis();

    const handleScroll = () => {
        lenis?.scrollTo("#about");
    };

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 1,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        }),
    };

    return (
        <section className="relative h-[100dvh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
            <HeroBackground />

            <div className="relative z-10 max-w-5xl mx-auto space-y-6">
                <motion.p
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    className="text-sm md:text-base tracking-[0.5em] text-white uppercase font-medium drop-shadow-md"
                >
                    Innovator • Designer • Developer
                </motion.p>

                <div className="overflow-hidden py-4">
                    <motion.h1
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black tracking-widest text-transparent bg-clip-text bg-linear-to-b from-white to-white/60"
                    >
                        SUBHADEEP <br className="hidden md:block" /> MISTRI
                    </motion.h1>
                </div>

                <motion.p
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    className="text-lg md:text-2xl font-light text-zinc-300 max-w-2xl mx-auto leading-relaxed"
                >
                    Crafting <span className="text-accent font-medium">cinematic</span> digital experiences that exist
                    at the intersection of intelligent design and fluid engineering.
                </motion.p>
            </div>

            {/* Scroll Indicator - Sticker */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1.5 }}
                onClick={handleScroll}
                className="absolute bottom-16 md:bottom-12 left-1/2 -translate-x-1/2 cursor-pointer z-20 hover:scale-110 transition-transform duration-300"
            >
                <Image
                    src="/explore-sticker.gif"
                    alt="Explore"
                    width={80}
                    height={80}
                    className="unoptimized"
                    unoptimized
                />
            </motion.div>
        </section>
    );
}
