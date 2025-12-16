import { projects } from "@/lib/data";
import { ArrowLeft, ExternalLink, Github, Terminal, Figma, BookOpen } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Define Page Props strictly
type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Generate Static Params if needed (optional for pure dynamic, but good for SSG)
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage(props: Props) {
    const params = await props.params;
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
        return null;
    }

    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-black">
            {/* Hero Section of Project */}
            <section className="relative h-[60vh] md:h-[80vh] w-full flex flex-col justify-end p-6 md:p-12 overflow-hidden">
                {/* Dynamic Background with Color */}
                <div className={`absolute inset-0 bg-linear-to-b ${project.color} opacity-20`} />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <Link href="/#projects" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        Back to Archives
                    </Link>

                    <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                        <div>
                            <span className="inline-block px-3 py-1 mb-4 border border-white/20 rounded-full text-xs tracking-widest uppercase bg-white/5 backdrop-blur-md">
                                {project.category}
                            </span>
                            <h1 className="text-5xl md:text-8xl font-heading font-black mb-4 leading-tight">
                                {project.title}
                            </h1>
                        </div>

                        {/* Deployment Actions */}
                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4 mb-2">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors whitespace-nowrap shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Live Preview
                                </a>
                            )}

                            {/* Figma Button */}
                            {project.figmaUrl && (
                                <a
                                    href={project.figmaUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-zinc-300 font-bold rounded-full border border-white/10 hover:bg-zinc-800 hover:text-white hover:border-white/30 transition-all whitespace-nowrap"
                                >
                                    <Figma className="w-5 h-5" />
                                    View in Figma
                                </a>
                            )}

                            {/* Case Study Button (Premium) */}
                            {project.type === 'design' && (
                                <Link
                                    href={`/projects/${project.slug}/case-study`}
                                    className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-accent/10 to-transparent text-accent font-bold rounded-full border border-accent/20 hover:bg-accent hover:text-black hover:border-accent hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.5)] transition-all whitespace-nowrap group/case"
                                >
                                    <BookOpen className="w-5 h-5 group-hover/case:scale-110 transition-transform" />
                                    Read Case Study
                                </Link>
                            )}

                            {/* View Source for Dev Projects */}
                            {project.repoUrl && !project.figmaUrl && (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-zinc-300 font-bold rounded-full border border-white/10 hover:bg-zinc-800 hover:text-white hover:border-white/30 transition-all whitespace-nowrap"
                                >
                                    <Github className="w-5 h-5" />
                                    View Source
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
                {/* Sidebar */}
                <div className="space-y-12">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-zinc-500 text-sm uppercase tracking-widest mb-2">Role</h3>
                            <p className="text-xl font-medium">Lead Designer & Developer</p>
                        </div>
                        <div>
                            <h3 className="text-zinc-500 text-sm uppercase tracking-widest mb-2">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="bg-zinc-900 border border-zinc-800 text-zinc-400 px-3 py-1 rounded-md text-xs font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Creative Code/Repo Section */}
                    {project.repoUrl && (
                        <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                            <div className="flex items-center gap-3 mb-4 text-zinc-400">
                                <Terminal className="w-5 h-5 text-accent" />
                                <span className="font-mono text-sm">Clone Repository</span>
                            </div>
                            <div className="bg-black p-4 rounded-lg border border-white/5 font-mono text-xs text-zinc-300 break-all select-all selection:bg-accent selection:text-black cursor-text">
                                git clone {project.repoUrl}.git
                            </div>
                            <p className="mt-4 text-xs text-zinc-500">
                                Open source access granted. Feel free to explore the codebase, fork the repo, and use snippets for your own missions.
                            </p>
                        </div>
                    )}
                </div>

                {/* Main Content */}
                <div className="space-y-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-500">The Challenge</h2>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            {project.details.challenge}
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-500">The Solution</h2>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                            {project.details.solution}
                        </p>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.details.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 p-4 bg-zinc-900/50 rounded-xl border border-white/5">
                                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                                    <span className="text-zinc-300">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* "Back to Home" but stylish footer */}
            <div className="border-t border-white/10 py-12 text-center">
                <Link href="/" className="text-zinc-500 hover:text-white transition-colors text-lg font-mono">
                    [ End of File. Return to Base? ]
                </Link>
            </div>
            {/* Floating Home Button */}
            <Link
                href="/"
                className="fixed bottom-8 right-8 z-50 p-4 bg-white text-black rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300"
                aria-label="Back to Home"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            </Link>
        </main >
    );
}
