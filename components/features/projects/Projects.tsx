"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import NextImage from "next/image";
import ProjectCard from "./ProjectCard";
import ScrollSticker from "@/components/ui/ScrollSticker";
import { StaggerContainer, StaggerItem, ScaleIn } from "@/components/ui/animations";

export default function Projects() {
    const [activeTab, setActiveTab] = useState<"dev" | "design">("design");

    // Cleaner filter logic based on strict 'type' assigned in data.ts
    const displayProjects = projects.filter(p => p.type === activeTab);

    return (
        <section className="pt-12 pb-32 md:pt-12 md:pb-48 px-6 md:px-12 bg-black relative" id="projects">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row justify-between items-end gap-6 relative">
                {/* Mobile Decoration Sticker - Left Side */}
                <div className="absolute left-0 top-0 md:hidden pointer-events-none">
                    <NextImage
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

                <div className="flex p-1 bg-zinc-950/50 rounded-full backdrop-blur-xl border border-white/10 relative">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveTab("design")}
                        className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-colors duration-300 w-full md:w-auto min-w-[140px] text-center ${activeTab === "design" ? "text-black mix-blend-normal" : "text-zinc-500 hover:text-white"
                            }`}
                    >
                        <span className="relative z-20">UI/UX Design</span>
                        {activeTab === "design" && (
                            <motion.div
                                layoutId="activeTabPill"
                                className="absolute inset-0 bg-white rounded-full shadow-lg z-10"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </motion.button>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveTab("dev")}
                        className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-colors duration-300 w-full md:w-auto min-w-[170px] text-center ${activeTab === "dev" ? "text-black mix-blend-normal" : "text-zinc-500 hover:text-white"
                            }`}
                    >
                        <span className="relative z-20">Frontend Engineering</span>
                        {activeTab === "dev" && (
                            <motion.div
                                layoutId="activeTabPill"
                                className="absolute inset-0 bg-white rounded-full shadow-lg z-10"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Unified Grid View (Mobile: 1 col, Desktop: 2 cols) */}
            <div className="max-w-7xl mx-auto min-h-[600px] relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            {displayProjects.map((project) => (
                                <StaggerItem key={project.slug}>
                                    <ScaleIn
                                        delay={0}
                                        duration={0.4}
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="h-full"
                                    >
                                        <ProjectCard project={project} />
                                    </ScaleIn>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Next Section Indicator */}
            <ScrollSticker targetId="#contact" className="bottom-4 md:bottom-8" />
        </section>
    );
}
