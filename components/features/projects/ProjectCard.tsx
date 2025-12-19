"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { ArrowUpRight, Figma, Github, ExternalLink, BookOpen } from "lucide-react";
import { Project } from "@/lib/data";
import ProjectLoader from "@/components/ui/ProjectLoader";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [isNavigating, setIsNavigating] = useState(false);
    const router = useRouter();

    const handleCaseStudyNav = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsNavigating(true);
        setTimeout(() => {
            router.push(`/projects/${project.slug}`);
        }, 2000);
    };

    return (
        <>
            <AnimatePresence>
                {isNavigating && <ProjectLoader key="loader" />}
            </AnimatePresence>

            {/* Card Container - Changed to div to avoid nested <a> tags */}
            <div className="group relative h-full cursor-pointer">
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-secondary border border-white/5 h-full">

                    {/* 1. Main Clickable Link REMOVED (User requested disable main opening) */}
                    {/* The card itself is just visual now, but action buttons are interactive. */}

                    {/* 2. Background Layers - Richer, Less Faded */}
                    <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-40 mix-blend-overlay group-hover:opacity-60 transition-opacity duration-500`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:to-black/30 transition-colors duration-500" />

                    {/* 3. Content Overlay (Sits on top, pointer-events-none allows clicks to pass through to Link, EXCEPT for buttons) */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-20 pointer-events-none">
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] uppercase tracking-wider font-bold text-white border border-white/10 shadow-lg">
                                        {project.category}
                                    </span>
                                    {/* Icon visible on hover or always on mobile? Let's make it always visible but subtle, highlight on hover */}
                                    <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
                                        {project.type === 'design' ? <Figma className="w-5 h-5 text-white" /> : <ArrowUpRight className="w-5 h-5 text-white" />}
                                    </div>
                                </div>

                                <h4 className="text-2xl md:text-3xl font-heading font-black text-white mb-3 leading-tight drop-shadow-md">
                                    {project.title}
                                </h4>

                                <p className="text-zinc-400 text-sm line-clamp-2 mb-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                    {project.description}
                                </p>

                                <div className="flex gap-2 flex-wrap mb-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 bg-white/5 px-2 py-1 rounded-sm">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons Row - Always Visible on Mobile, Slide-up on Desktop */}
                            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10 pointer-events-auto z-50 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
                                {/* Live Demo */}
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3 py-2 bg-white text-black text-[10px] md:text-xs font-bold rounded-full hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10"
                                    >
                                        <ExternalLink className="w-3 h-3" />
                                        Live
                                    </a>
                                )}

                                {/* Source Code */}
                                {project.repoUrl && (
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3 py-2 bg-zinc-900 text-white text-[10px] md:text-xs font-bold rounded-full border border-white/10 hover:bg-zinc-800 transition-colors"
                                    >
                                        <Github className="w-3 h-3" />
                                        Code
                                    </a>
                                )}

                                {/* Figma */}
                                {project.figmaUrl && (
                                    <a
                                        href={project.figmaUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3 py-2 bg-zinc-900 text-white text-[10px] md:text-xs font-bold rounded-full border border-white/10 hover:bg-zinc-800 transition-colors"
                                    >
                                        <Figma className="w-3 h-3" />
                                        Figma
                                    </a>
                                )}

                                {/* Read Case Study Button aka "The Button" */}
                                <Link
                                    href={`/projects/${project.slug}`}
                                    onClick={handleCaseStudyNav}
                                    className="flex items-center gap-1.5 px-3 py-2 bg-accent/10 text-accent text-[10px] md:text-xs font-bold rounded-full border border-accent/20 hover:bg-accent hover:text-black transition-colors ml-auto"
                                >
                                    <BookOpen className="w-3 h-3" />
                                    {project.type === 'design' ? 'Case Study' : 'Details'}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
