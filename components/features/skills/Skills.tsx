"use client";

import ScrollSticker from "@/components/ui/ScrollSticker";
import { FadeIn, StaggerContainer } from "@/components/ui/animations";
import { skills } from "@/lib/data";
import SkillCard from "./SkillCard";

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
                    {skills.map((skill) => (
                        <SkillCard key={skill.category} skill={skill} />
                    ))}
                </StaggerContainer>
            </div>

            {/* Next Section Indicator */}
            <ScrollSticker targetId="#projects" className="bottom-4 md:bottom-8" />
        </section >
    )
}
