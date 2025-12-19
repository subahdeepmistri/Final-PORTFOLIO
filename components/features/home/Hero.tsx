"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroBackground from "@/components/ui/HeroBackground";
import { FadeIn } from "@/components/ui/animations";
import { useLenis } from "lenis/react";

export default function Hero() {
    const lenis = useLenis();

    const handleScroll = () => {
        lenis?.scrollTo("#about");
    };

    return (
        <section className="relative h-[100dvh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
            <HeroBackground />

            <div className="relative z-10 max-w-5xl mx-auto space-y-6">
                <FadeIn delay={0.2}>
                    <p className="text-sm md:text-base tracking-[0.5em] text-white uppercase font-medium drop-shadow-md">
                        Innovator • Designer • Developer
                    </p>
                </FadeIn>

                <div className="overflow-hidden py-4">
                    <FadeIn delay={0.4}>
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black tracking-widest text-transparent bg-clip-text bg-linear-to-b from-white to-white/60">
                            SUBHADEEP <br className="hidden md:block" /> MISTRI
                        </h1>
                    </FadeIn>
                </div>

                <FadeIn delay={0.6}>
                    <p className="text-lg md:text-2xl font-light text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                        Crafting <span className="text-accent font-medium">cinematic</span> digital experiences that exist
                        at the intersection of intelligent design and fluid engineering.
                    </p>
                </FadeIn>
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
