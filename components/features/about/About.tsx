"use client";

import { motion, Variants } from "framer-motion";
import ScrollSticker from "@/components/ui/ScrollSticker";

import PhotoDeck from "./PhotoDeck";

export default function About() {
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section id="about" className="min-h-screen py-24 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

                {/* 1. Title (Mobile: First, Desktop: Top-Right) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="order-1 md:order-2 md:col-start-2 md:self-end"
                >
                    <h2 className="text-sm tracking-[0.3em] text-accent uppercase mb-4">The Architect</h2>
                    <h3 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-gradient leading-tight">
                        Designing with <br /> Intent & Precision
                    </h3>
                </motion.div>

                {/* 2. PhotoDeck (Mobile: Middle, Desktop: Left) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="order-2 md:order-1 md:row-span-2 relative w-full flex justify-center"
                >
                    <PhotoDeck />
                </motion.div>

                {/* 3. Text Content (Mobile: Last, Desktop: Bottom-Right) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2 }}
                    variants={fadeInUp}
                    className="order-3 md:order-2 md:col-start-2 md:self-start space-y-8"
                >
                    <div className="prose prose-invert prose-lg text-zinc-400 font-light">
                        <p>
                            I am <strong className="text-white font-medium">Subhadeep Mistri</strong>, a UI/UX Designer and Frontend Developer based in Kolkata.
                            My work lies at the convergence of artistic expression and engineering rigor.
                        </p>
                        <p>
                            I don&apos;t just build websites; I construct digital narratives.
                            Educated at <span className="text-white">RCC Institute of Information Technology (B.Tech CSE)</span>,
                            I blend technical depth with design intuition to create interfaces that feel alive.
                        </p>
                    </div>

                    {/* Philosophy / Stats */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        variants={fadeInUp}
                        className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10"
                    >
                        <div>
                            <h4 className="text-2xl font-bold text-white mb-2">Design</h4>
                            <p className="text-sm text-zinc-500">Minimalist • User-Centric • Story-driven</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-white mb-2">Code</h4>
                            <p className="text-sm text-zinc-500">Clean • Semantic • High-Performance</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            {/* Next Section Indicator */}
            <ScrollSticker targetId="#skills" className="bottom-4 md:bottom-8" />
        </section>
    );
}
