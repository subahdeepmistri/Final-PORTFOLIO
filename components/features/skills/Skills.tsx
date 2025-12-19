"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Terminal } from "lucide-react";
import Image from "next/image";
import ScrollSticker from "@/components/ui/ScrollSticker";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const skills = [
    {
        category: "Frontend Engineering",
        icon: <Code2 className="w-8 h-8 text-cyan-400" />,
        items: ["", "", "", "", "", "HTML5/CSS3"],
        image: "/skills/bg-frontend.png"
    },
    {
        category: "UI/UX Design",
        icon: <Palette className="w-8 h-8 text-purple-400" />,
        items: ["Figma", "Wireframing", "Prototyping", "User Research", "Adobe Suite", "Responsive Design"],
        image: "/skills/bg-design.png"
    },
    {
        category: "Tools & Workflow",
        icon: <Terminal className="w-8 h-8 text-emerald-400" />,
        items: ["Git/GitHub", "GitLab", "VS Code", "Canva", "Vercel", "Performance Tuning"],
        image: "/skills/bg-tools.png"
    }
];

export default function Skills() {
    return (
        <section id="skills" className="pt-20 pb-32 md:pt-24 md:pb-48 px-6 md:px-12 bg-black relative">
            <div className="max-w-7xl mx-auto">
                <FadeIn className="mb-20 text-center">
                    <h2 className="text-sm tracking-[0.3em] text-accent uppercase mb-4">Capabilities</h2>
                    <h3 className="text-4xl md:text-6xl font-heading font-bold text-white">
                        Technical <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-600">Arsenal</span>
                    </h3>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skill, idx) => (
                        <StaggerItem
                            key={idx}
                            className="group p-6 md:p-8 rounded-3xl bg-zinc-900 border border-white/10 hover:border-accent/40 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-between"
                        >
                            {/* Background Image with Zoom Effect */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={skill.image}
                                    alt={skill.category}
                                    fill
                                    className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Gradient Overlay for text readability */}
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-black/60" />
                            </div>

                            {/* Hover Gradient Effect (Accent) */}
                            <div className="absolute inset-0 bg-linear-to-br from-accent/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                            <div className="relative z-20">
                                <div className="mb-6 p-4 rounded-2xl bg-black/50 w-fit border border-white/10 group-hover:border-accent/50 transition-colors backdrop-blur-md">
                                    {skill.icon}
                                </div>

                                <h4 className="text-2xl font-bold font-heading text-white mb-6 group-hover:text-accent transition-colors">
                                    {skill.category}
                                </h4>

                                <div className="flex flex-wrap gap-2">
                                    {skill.items.map((item, itemIdx) => (
                                        <span
                                            key={itemIdx}
                                            className="px-3 py-1 text-xs/2 tracking-wider font-light text-zinc-300 bg-white/10 rounded-full border border-white/5 group-hover:bg-white/20 group-hover:border-white/20 transition-all backdrop-blur-sm"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>

            {/* Next Section Indicator */}
            <ScrollSticker targetId="#projects" className="bottom-4 md:bottom-8" />
        </section >
    )
}
