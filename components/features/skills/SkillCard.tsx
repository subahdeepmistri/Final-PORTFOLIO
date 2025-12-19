"use client";

import { Code2, Palette, Terminal, Shapes } from "lucide-react";
import Image from "next/image";
import { StaggerItem } from "@/components/ui/animations";
import { SkillCategory, SkillIconName } from "@/lib/data";

const iconMap: Record<SkillIconName, React.ReactNode> = {
    code: <Code2 className="w-8 h-8 text-cyan-400" />,
    palette: <Palette className="w-8 h-8 text-purple-400" />,
    terminal: <Terminal className="w-8 h-8 text-emerald-400" />,
};

interface SkillCardProps {
    skill: SkillCategory;
}

export default function SkillCard({ skill }: SkillCardProps) {
    return (
        <StaggerItem className="group p-6 md:p-8 rounded-3xl bg-zinc-900 border border-white/10 hover:border-accent/40 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-between">
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
                    {iconMap[skill.icon] || <Shapes className="w-8 h-8 text-zinc-400" />}
                </div>

                <h4 className="text-2xl font-bold font-heading text-white mb-6 group-hover:text-accent transition-colors">
                    {skill.category}
                </h4>

                <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 text-xs/2 tracking-wider font-light text-zinc-300 bg-white/10 rounded-full border border-white/5 group-hover:bg-white/20 group-hover:border-white/20 transition-all backdrop-blur-sm"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </StaggerItem>
    );
}
