"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import ScrollSticker from "@/components/ui/ScrollSticker";

export default function Projects() {
    const [activeTab, setActiveTab] = useState<"dev" | "design">("dev");

    // Cleaner filter logic based on strict 'type' assigned in data.ts
    const displayProjects = projects.filter(p => p.type === activeTab);

    return (
        <section className="pt-12 pb-32 md:pt-12 md:pb-48 px-6 md:px-12 bg-black relative" id="projects">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row justify-between items-end gap-6 relative">
                {/* Mobile Decoration Sticker - Left Side */}
                <div className="absolute left-0 top-0 md:hidden pointer-events-none">
                    <Image
                        src="/mobile-decoration.gif"
                        alt="Decoration"
                        width={100}
                        height={100}
                        className="unoptimized opacity-80"
                        unoptimized
                    />
                </div>

                <div>
                    <h2 className="text-sm tracking-[0.3em] text-accent uppercase mb-4">Selected Works</h2>
                    <h3 className="text-4xl md:text-6xl font-heading font-bold text-white">
                        Design <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-500">Outcomes</span>
                    </h3>
                </div>

                <div className="flex gap-4 p-1 bg-white/5 rounded-full backdrop-blur-md border border-white/10">
                    <button
                        onClick={() => setActiveTab("dev")}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "dev" ? "bg-white text-black shadow-lg" : "text-zinc-400 hover:text-white"
                            }`}
                    >
                        Frontend Engineering
                    </button>
                    <button
                        onClick={() => setActiveTab("design")}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "design" ? "bg-white text-black shadow-lg" : "text-zinc-400 hover:text-white"
                            }`}
                    >
                        UI/UX Design
                    </button>
                </div>
            </div>

            {/* Desktop Grid View */}
            <div className="max-w-7xl mx-auto min-h-[600px] hidden md:block">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
                    >
                        {displayProjects.map((project, idx) => (
                            <motion.div
                                key={project.slug}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Mobile Carousel View with Animations */}
            <div className="md:hidden relative w-full">
                {/* Visual Fade Mask */}
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-black to-transparent pointer-events-none z-20" />

                {/* Animated Track */}
                <motion.div
                    initial={{ x: 0 }}
                    whileInView={{ x: [0, -60, 0] }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
                    className="w-full overflow-x-auto snap-x snap-mandatory flex gap-4 px-6 pb-2 no-scrollbar"
                >
                    {displayProjects.map((project) => (
                        <div key={project.slug} className="min-w-[85vw] snap-center">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                    {/* Spacer for last item visibility against mask */}
                    <div className="min-w-[5vw] shrink-0" />
                </motion.div>

                {/* Subtle Swipe Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="flex justify-center items-center gap-2 mt-4 text-zinc-500 text-xs font-medium uppercase tracking-widest"
                >
                    <span>Swipe to explore</span>
                    <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        →
                    </motion.div>
                </motion.div>
            </div>

            {/* Next Section Indicator */}
            <ScrollSticker targetId="#contact" className="bottom-4 md:bottom-8" />
        </section>
    );
}
