"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { ArrowUpRight, Figma } from "lucide-react";
import { Project } from "@/lib/data";
import ProjectLoader from "@/components/ui/ProjectLoader";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [isNavigating, setIsNavigating] = useState(false);
    const router = useRouter();

    const handleProjectClick = (e: React.MouseEvent) => {
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

            <Link
                href={`/projects/${project.slug}`}
                onClick={handleProjectClick}
                className="group relative cursor-pointer block h-full"
            >
                {/* Card Container */}
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-secondary border border-white/5 h-full">
                    {/* Dynamic Background Placeholder */}
                    <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <span className="px-3 py-1 bg-black/30 backdrop-blur-md rounded-full text-xs text-white border border-white/10">
                                {project.category}
                            </span>
                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                {project.type === 'design' ? <Figma className="w-5 h-5 text-white" /> : <ArrowUpRight className="w-5 h-5 text-white" />}
                            </div>
                        </div>

                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h4 className="text-3xl font-heading font-bold text-white mb-2">{project.title}</h4>
                            <p className="text-zinc-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                {project.description}
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-xs text-zinc-500 font-mono">#{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}
