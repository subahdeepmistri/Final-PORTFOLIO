import { projects } from "@/lib/data";
import { ArrowLeft, Check, ChevronRight, Layers, LayoutTemplate, Lightbulb, Palette, Users, Home as HomeIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProcessDeck from "@/components/features/projects/ProcessDeck";

// Define Page Props
type Props = {
    params: Promise<{ slug: string }>;
};

// Generate Static Params
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function CaseStudyPage(props: Props) {
    const params = await props.params;
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
        return null;
    }

    // Dummy Data for Structure (User can edit this part later)
    const researchPoints = [
        "Competitor Analysis: Analyzed 5 major competitors to identify gaps.",
        "User Interviews: Conducted interviews with 10 potential users.",
        "Market Trends: Researched current design trends in the industry."
    ];

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
                        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-mono group">
                            <span>Home</span>
                        </Link>
                        <div className="w-px h-4 bg-white/10" />
                        <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-mono group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span>Back to Project</span>
                        </Link>
                    </div>

                    <h3 className="text-accent text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4">UX Case Study</h3>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-tight mb-8">
                        {project.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-light leading-relaxed">
                        {project.description}
                    </p>
                </div>
            </section>

            {/* 2. INFO GRID (Sticky-ish feel) */}
            <section className="border-t border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
                        <div>
                            <h4 className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Role</h4>
                            <p className="text-sm md:text-base font-medium text-white">Product Designer</p>
                        </div>
                        <div>
                            <h4 className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Timeline</h4>
                            <p className="text-sm md:text-base font-medium text-white">4 Weeks (Sprint)</p>
                        </div>
                        <div>
                            <h4 className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Tools</h4>
                            <p className="text-sm md:text-base font-medium text-white">Figma, Notion, AE</p>
                        </div>
                        <div>
                            <h4 className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Platform</h4>
                            <p className="text-sm md:text-base font-medium text-white">{project.category}</p>
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

            <div className="border-t border-white/10 py-12 text-center bg-black">
                <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-lg">
                    <span>Back to Project Overview</span>
                    <ChevronRight className="w-4 h-4" />
                </Link>
            </div>

            {/* Design Process Overlay */}
            <ProcessDeck />
        </main>
    );
}
