import { projects } from "@/lib/data";
import { ArrowLeft, Check, ChevronRight, Layers, LayoutTemplate, Lightbulb, Palette, Users, Home as HomeIcon, ExternalLink, Github, Figma } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProcessDeck from "@/components/features/projects/ProcessDeck";

// Define Page Props (Next.js 15 requires params to be a Promise)
type Props = {
    params: Promise<{ slug: string }>;
};

// Generate Static Params
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
        return null;
    }

    // Restrict access: Only DESIGN projects have a Case Study page
    if (project.type !== 'design') {
        notFound();
        return null;
    }

    // Dummy Data for Structure
    const painPoints = [
        { title: "Complexity", desc: "Users found existing solutions too complex to navigate." },
        { title: "Visual Clutter", desc: "Information overload was a major complaint." },
        { title: "Performance", desc: "Slow load times frustrated mobile users." },
    ];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-black font-sans">

            {/* 1. HERO SECTION */}
            <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-12 py-20 overflow-hidden">
                {/* Backgrounds */}
                <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-10`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px] opacity-50" />

                <div className="relative z-10 max-w-5xl mx-auto w-full">
                    <div className="flex items-center gap-6 mb-8">
                        <Link href="/#projects" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-mono group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span>Back</span>
                        </Link>
                        {/* Removed circular "Back to Project" link */}
                    </div>

                    <h3 className="text-accent text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4">{project.category}</h3>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-tight mb-8">
                        {project.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-light leading-relaxed mb-8">
                        {project.description}
                    </p>

                    {/* Hero Action Buttons - Conditional based on Project Type */}
                    <div className="flex flex-wrap items-center gap-6 mt-2">
                        {project.type === 'design' ? (
                            // DESIGN PROJECTS: Show Process Deck Trigger Here
                            <ProcessDeck triggerPosition="inline" />
                        ) : (
                            // DEV PROJECTS: Show Live/Code Links
                            <>
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        Live Demo
                                    </a>
                                )}
                                {project.repoUrl && (
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white font-bold rounded-full border border-white/10 hover:bg-zinc-800 transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                        Source Code
                                    </a>
                                )}
                            </>
                        )}

                        {/* Figma Link (keep for both if available, or just design?) */}
                        {/* Usually Figma is for design. If it's a dev project, probably repo is clearer. */}
                        {project.figmaUrl && (
                            <a
                                href={project.figmaUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white font-bold rounded-full border border-white/10 hover:bg-zinc-800 transition-colors"
                            >
                                <Figma className="w-5 h-5" />
                                Figma File
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* 2. INFO GRID (Sticky-ish feel) */}
            <section className="border-t border-white/10 bg-black/50 backdrop-blur-sm relative">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
                        <div>
                            <h4 className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Role</h4>
                            <p className="text-sm md:text-base font-medium text-white">Lead Designer & Developer</p>
                        </div>
                        <div>
                            <h4 className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Timeline</h4>
                            <p className="text-sm md:text-base font-medium text-white">4 Weeks</p>
                        </div>
                        <div>
                            <h4 className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Tech Stack</h4>
                            <p className="text-sm md:text-base font-medium text-white line-clamp-1">{project.tech.join(", ")}</p>
                        </div>
                        <div>
                            <h4 className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Type</h4>
                            <p className="text-sm md:text-base font-medium text-white capitalize">{project.type}</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-6 md:px-12 py-24 space-y-32">

                {/* 3. THE PROBLEM (Challenge) */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                            <Lightbulb className="w-6 h-6 text-yellow-500" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold">The Challenge</h2>
                    </div>
                    <div className="prose prose-invert prose-lg text-zinc-300 leading-relaxed">
                        <p>{project.details.challenge}</p>
                        <p className="mt-4">
                            In a world saturated with digital noise, the primary goal was to create an experience that cuts through the clutter.
                            We needed to balance aesthetic appeal with core functionality, ensuring that users could achieve their goals
                            without getting distracted by purely decorative elements.
                        </p>
                    </div>
                </section>

                {/* 4. DISCOVERY & RESEARCH */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                            <Users className="w-6 h-6 text-blue-500" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold">User Research</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Fake Persona Cards (Placeholder) */}
                        <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                            <div className="w-16 h-16 rounded-full bg-zinc-800 mb-6" />
                            <h4 className="text-xl font-bold mb-1">The Power User</h4>
                            <p className="text-sm text-zinc-500 mb-4">Tech-savvy, values efficiency.</p>
                            <ul className="space-y-2 text-sm text-zinc-400">
                                <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> Needs keyboard shortcuts</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> Hates slow transitions</li>
                            </ul>
                        </div>
                        <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                            <div className="w-16 h-16 rounded-full bg-zinc-800 mb-6" />
                            <h4 className="text-xl font-bold mb-1">The Casual Browser</h4>
                            <p className="text-sm text-zinc-500 mb-4">Visual learner, needs guidance.</p>
                            <ul className="space-y-2 text-sm text-zinc-400">
                                <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> Needs clear labels</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> Appreciates good onboarding</li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold mb-6 text-white">Key Pain Points</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {painPoints.map((point, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                <span className="block text-4xl font-black text-white/10 mb-4">0{i + 1}</span>
                                <h4 className="font-bold text-lg mb-2">{point.title}</h4>
                                <p className="text-sm text-zinc-400">{point.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. IDEATION / PROCESS */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                            <LayoutTemplate className="w-6 h-6 text-purple-500" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold">Ideation & Wireframes</h2>
                    </div>
                    <p className="text-zinc-400 text-lg mb-8">
                        Before diving into pixels, I sketched out the core flows to ensure the information architecture was solid.
                    </p>

                    {/* Wireframe Placeholder */}
                    <div className="aspect-video w-full rounded-3xl bg-zinc-900 border border-white/10 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat group-hover:transition-[background-position_0s_ease] group-hover:bg-[position:200%_0,0_0] duration-[1500ms]" />
                        <span className="text-zinc-600 font-mono text-xl border border-dashed border-zinc-700 px-6 py-3 rounded-lg">
                            [ Wireframe / Sketch Image Placeholder ]
                        </span>
                    </div>
                </section>

                {/* 6. DESIGN SYSTEM */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                            <Palette className="w-6 h-6 text-pink-500" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold">Visual Language</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Typography Card */}
                        <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5">
                            <h4 className="text-sm uppercase tracking-widest text-zinc-500 mb-6">Typography</h4>
                            <div className="space-y-4">
                                <div>
                                    <span className="text-4xl md:text-6xl font-heading font-bold text-white">Aa</span>
                                    <p className="text-sm text-zinc-400 mt-2 font-heading">Outfit / Heading</p>
                                </div>
                                <div className="border-t border-white/10 pt-4">
                                    <span className="text-2xl md:text-4xl font-sans text-white">Aa</span>
                                    <p className="text-sm text-zinc-400 mt-2 font-sans">Inter / Body</p>
                                </div>
                            </div>
                        </div>

                        {/* Colors Card */}
                        <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 flex flex-col">
                            <h4 className="text-sm uppercase tracking-widest text-zinc-500 mb-6">Color Palette</h4>
                            <div className="grid grid-cols-2 gap-4 grow">
                                <div className={`rounded-xl bg-linear-to-br ${project.color} h-24`} />
                                <div className="rounded-xl bg-zinc-800 h-24" />
                                <div className="rounded-xl bg-white h-24" />
                                <div className="rounded-xl bg-black border border-white/20 h-24" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. FINAL SOLUTION */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                            <Layers className="w-6 h-6 text-emerald-500" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold">The Solution</h2>
                    </div>
                    <div className="prose prose-invert prose-lg text-zinc-300 leading-relaxed mb-12">
                        <p>{project.details.solution}</p>
                    </div>

                    <div className="space-y-8">
                        {/* Final UI Shots Placeholders */}
                        <div className="aspect-video w-full rounded-3xl bg-zinc-900 border border-white/10 overflow-hidden relative">
                            <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-20`} />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-zinc-500 font-mono">[ High Fidelity UI Shot 1 ]</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="aspect-[4/5] w-full rounded-3xl bg-zinc-900 border border-white/10 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/50" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-zinc-500 font-mono">[ Mobile View ]</span>
                                </div>
                            </div>
                            <div className="aspect-[4/5] w-full rounded-3xl bg-zinc-900 border border-white/10 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/50" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-zinc-500 font-mono">[ Interaction Detail ]</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. CONCLUSION */}
                <section className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/5 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Reflection</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        This project challenged me to think deeply about user intent and visual hierarchy.
                        By prioritizing the user&apos;s needs and iterating on feedback, I was able to deliver a
                        solution that is not only visually stunning but also highly functional.
                    </p>
                </section>

            </div>

            <div className="border-t border-white/10 pt-12 pb-32 text-center bg-black">
                <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-lg font-mono">
                    <span>[ End of Details. Return to Base ]</span>
                </Link>
            </div>

            {/* ProcessDeck Removed from bottom - now conditionally in Hero */}
        </main>
    );
}
