"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, PenTool, CheckCircle, X, ChevronRight, Lightbulb, Layers, SplitSquareHorizontal, ArrowLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";

// --------------------------------------------------------------------------
// 1. CONFIGURATION DATA
// --------------------------------------------------------------------------

export type ProcessPhase = {
    id: string;
    title: string;
    icon: React.ElementType;
    color: string;
    mobileColor: string;
    content: {
        headline: string;
        description: string;
        points: string[];
    };
    comparison?: {
        beforeImage: string; // URL or CSS Gradient for demo
        afterImage: string;  // URL or CSS Gradient for demo
        beforeLabel: string;
        afterLabel: string;
    };
};

export const caseStudyData: ProcessPhase[] = [
    {
        id: "discovery",
        title: "Discovery",
        icon: Search,
        color: "from-blue-500 to-cyan-500",
        mobileColor: "from-blue-600/40 via-cyan-600/20 to-transparent",
        content: {
            headline: "Uncovering the Core Problem",
            description:
                "Before pixel perfection, we needed to understand the 'why'. We conducted deep user research to identify the friction points in the current workflow.",
            points: [
                "Conducted 15+ User Interviews",
                "Competitor Analysis (SWOT)",
                "Identified 3 Key Pain Points",
            ],
        },
    },
    {
        id: "definition",
        title: "Definition",
        icon: Lightbulb,
        color: "from-yellow-500 to-orange-500",
        mobileColor: "from-yellow-600/40 via-orange-600/20 to-transparent",
        content: {
            headline: "Structuring the Strategy",
            description:
                "Synthesizing data into actionable insights. We defined user personas and mapped out the ideal user journey to ensure every interaction had a purpose.",
            points: [
                "User Persona Creation",
                "Empathy Mapping",
                "Information Architecture (Sitemap)",
            ],
        },
    },
    {
        id: "design",
        title: "Design",
        icon: PenTool,
        color: "from-purple-500 to-pink-500",
        mobileColor: "from-purple-600/40 via-pink-600/20 to-transparent",
        content: {
            headline: "Crafting the Visual System",
            description:
                "Translating wireframes into a high-fidelity interface. We focused on a 'Glassmorphic' aesthetic to give the UI a sense of depth and modernity.",
            points: [
                "Low-fidelity Wireframing",
                "Design System Implementation",
                "High-fidelity Prototyping",
            ],
        },
    },
    {
        id: "validation",
        title: "Validation",
        icon: CheckCircle,
        color: "from-emerald-500 to-green-500",
        mobileColor: "from-emerald-600/40 via-green-600/20 to-transparent",
        content: {
            headline: "Testing & Iteration",
            description:
                "We didn't stop at the first draft. Usability testing revealed navigation issues that were fixed in the final sprint, increasing task success rate by 40%.",
            points: [
                "A/B Testing on Key Flows",
                "Accessibility Audit (WCAG 2.1)",
                "Final Handoff Documentation",
            ],
        },
    },
    {
        id: "evolution",
        title: "Evolution",
        icon: SplitSquareHorizontal,
        color: "from-pink-500 to-rose-500",
        mobileColor: "from-pink-600/40 via-rose-600/20 to-transparent",
        content: {
            headline: "The UX Transformation",
            description:
                "A direct comparison of the legacy system versus our reimagined solution. The improvement in clarity and efficiency is immediately tangible.",
            points: [
                "Reduced Click-Depth by 45%",
                "Improved Information Hierarchy",
                "Modernized Visual Language",
            ],
        },
        comparison: {
            beforeImage: "linear-gradient(to bottom right, #374151, #111827)", // Placeholder Dark Grey
            afterImage: "linear-gradient(to bottom right, #ec4899, #8b5cf6)",  // Placeholder Vibrant
            beforeLabel: "Legacy Interface",
            afterLabel: "Redesigned Experience"
        }
    },
];

// --------------------------------------------------------------------------
// 2. SUB-COMPONENTS
// --------------------------------------------------------------------------

function ComparisonSlider({ before, after, labelBefore, labelAfter }: { before: string, after: string, labelBefore: string, labelAfter: string }) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        setSliderPosition(percent);
    };

    const handleMouseDown = () => { isDragging.current = true; };
    const handleMouseUp = () => { isDragging.current = false; };
    const handleMouseMove = (e: React.MouseEvent) => { if (isDragging.current) handleMove(e.clientX); };
    const handleTouchMove = (e: React.TouchEvent) => { handleMove(e.touches[0].clientX); };

    // Global mouse up to catch comparison drag release outside component
    useEffect(() => {
        const handleGlobalMouseUp = () => { isDragging.current = false; };
        window.addEventListener("mouseup", handleGlobalMouseUp);
        return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-video md:aspect-21/9 rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-2xl"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onClick={(e) => handleMove(e.clientX)}
        >
            {/* AFTER IMAGE (Background) */}
            <div
                className="absolute inset-0 w-full h-full flex items-center justify-center text-white font-bold text-2xl"
                style={{ background: after }}
            >
                <div className="bg-black/40 px-4 py-2 rounded-lg">{labelAfter}</div>
            </div>

            {/* BEFORE IMAGE (Clipped on top) */}
            <div
                className="absolute inset-0 h-full overflow-hidden"
                style={{ width: `${sliderPosition}%`, background: before }}
            >
                <div className="absolute inset-0 w-full h-full flex items-center justify-center text-zinc-400 font-bold text-2xl">
                    <div className="bg-black/60 px-4 py-2 rounded-lg whitespace-nowrap">{labelBefore}</div>
                </div>
                {/* Border line between images */}
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
            </div>

            {/* HANDLER */}
            <div
                className="absolute top-0 bottom-0 w-10 -ml-5 flex items-center justify-center z-10 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-black">
                    <ArrowLeftRight className="w-4 h-4 md:w-5 md:h-5" />
                </div>
            </div>

            {/* Labels (Floating) */}
            <div className="absolute top-4 left-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70 bg-black/60 px-2 py-1 rounded-md pointer-events-none">Before</div>
            <div className="absolute top-4 right-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70 bg-black/60 px-2 py-1 rounded-md pointer-events-none">After</div>
        </div>
    );
}

// --------------------------------------------------------------------------
// 3. MAIN COMPONENT
// --------------------------------------------------------------------------

export default function ProcessDeck() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<number>(0);

    const activePhase = caseStudyData[activeTab];

    return (
        <>
            {/* TRIGGER BUTTON (Responsive) */}
            <motion.button
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-black/80 backdrop-blur-xl border border-white/10 text-white rounded-full shadow-2xl group overflow-hidden"
            >
                <div className="absolute inset-x-0 bottom-0 h-px md:h-[2px] bg-linear-to-r from-transparent via-accent to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

                {/* Container for content */}
                <div className="flex items-center gap-3 px-4 py-3 md:px-6 md:py-4 relative z-10">
                    <div className="p-1.5 md:p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors shrink-0">
                        <Layers className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                    </div>

                    <div className="text-left flex flex-col justify-center">
                        <span className="hidden md:block text-[10px] uppercase tracking-widest text-zinc-400 font-bold leading-none mb-1">Case Study</span>
                        <span className="text-sm md:text-base font-bold leading-none">View Process</span>
                    </div>
                </div>
            </motion.button>

            {/* MODAL OVERLAY */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="modal-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-60 bg-black/90 backdrop-blur-xl md:bg-black/80 md:backdrop-blur-sm"
                        />

                        {/* Deck Container */}
                        <motion.div
                            key="modal-container"
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed inset-0 z-70 flex items-center justify-center pointer-events-none"
                        >
                            <div className="pointer-events-auto bg-zinc-950 md:bg-zinc-950/90 backdrop-blur-2xl border-none md:border border-white/10 w-full h-dvh md:h-[750px] md:max-w-6xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative">

                                {/* Mobile Full-Screen Gradient Background */}
                                <div
                                    className={`md:hidden absolute inset-0 bg-linear-to-b ${activePhase.mobileColor} opacity-50 transition-colors duration-700`}
                                />

                                {/* Close Button UI */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-6 right-6 md:top-4 md:right-4 z-50 p-3 md:p-2 bg-black/20 md:bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full text-white/70 hover:text-white transition-colors border border-white/5"
                                >
                                    <X className="w-6 h-6 md:w-5 md:h-5" />
                                </button>

                                {/* LEFT: Navigation Tabs (Desktop Sidebar / Mobile Bottom Bar) */}
                                <div className="hidden md:flex w-full md:w-72 border-r border-white/10 bg-black/20 p-6 flex-col shrink-0">
                                    <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold mb-6">Process Timeline</h2>
                                    <div className="space-y-2">
                                        {caseStudyData.map((phase, index) => {
                                            const isActive = index === activeTab;
                                            const Icon = phase.icon;
                                            return (
                                                <button
                                                    key={phase.id}
                                                    onClick={() => setActiveTab(index)}
                                                    className={cn(
                                                        "w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 relative overflow-hidden group",
                                                        isActive ? "bg-white/5 border border-white/10" : "hover:bg-white/5 border border-transparent"
                                                    )}
                                                >
                                                    {isActive && (
                                                        <motion.div
                                                            layoutId="activeTabGlow"
                                                            className={`absolute inset-0 bg-linear-to-r ${phase.color} opacity-10`}
                                                        />
                                                    )}

                                                    <div className={cn(
                                                        "w-10 h-10 rounded-lg flex items-center justify-center transition-colors relative z-10",
                                                        isActive ? "bg-black text-white shadow-lg" : "bg-white/5 text-zinc-500 group-hover:text-zinc-300"
                                                    )}>
                                                        <Icon className="w-5 h-5" />
                                                    </div>

                                                    <div className="relative z-10">
                                                        <span className={cn(
                                                            "text-xs font-mono uppercase tracking-wider block mb-0.5",
                                                            isActive ? "text-accent" : "text-zinc-600"
                                                        )}>
                                                            Phase 0{index + 1}
                                                        </span>
                                                        <span className={cn(
                                                            "font-bold text-sm block",
                                                            isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                                                        )}>
                                                            {phase.title}
                                                        </span>
                                                    </div>

                                                    {isActive && (
                                                        <motion.div
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            className="ml-auto text-accent"
                                                        >
                                                            <ChevronRight className="w-4 h-4" />
                                                        </motion.div>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* RIGHT: Content Display */}
                                <div className="flex-1 w-full h-full flex flex-col relative z-10">

                                    {/* Desktop Gradient Blob (Hidden on Mobile) */}
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activePhase.id + "-bg-desktop"}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className={`hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-linear-to-b ${activePhase.color} opacity-5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none`}
                                        />
                                    </AnimatePresence>

                                    {/* SCROLLABLE CONTENT AREA */}
                                    <div className="flex-1 overflow-y-auto custom-scrollbar p-6 pt-24 md:p-12 md:pt-12 flex flex-col justify-start md:justify-center">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={activePhase.id}
                                                initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                                exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                className="relative z-10 w-full max-w-4xl mx-auto"
                                            >
                                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 md:bg-white/5 border border-white/10 backdrop-blur-md mb-6 self-start">
                                                    <activePhase.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                                                    <span className="text-[10px] md:text-xs font-mono text-white/90 uppercase tracking-wider">
                                                        Phase 0{activeTab + 1}: {activePhase.title}
                                                    </span>
                                                </div>

                                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white mb-6 leading-[1.1] tracking-tight">
                                                    {activePhase.content.headline}
                                                </h3>

                                                <p className="text-base sm:text-lg md:text-xl text-zinc-300 md:text-zinc-400 leading-relaxed mb-8 max-w-xl">
                                                    {activePhase.content.description}
                                                </p>

                                                {/* CONDITIONAL RENDERING: COMPARISON SLIDER OR POINTS */}
                                                {activePhase.comparison ? (
                                                    <div className="mb-8">
                                                        <ComparisonSlider
                                                            before={activePhase.comparison.beforeImage}
                                                            after={activePhase.comparison.afterImage}
                                                            labelBefore={activePhase.comparison.beforeLabel}
                                                            labelAfter={activePhase.comparison.afterLabel}
                                                        />
                                                    </div>
                                                ) : null}

                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                    {activePhase.content.points.map((point, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.1 + i * 0.1 }}
                                                            className="flex items-center gap-4 p-4 rounded-xl bg-black/20 md:bg-white/5 border border-white/5 md:border-white/5 hover:border-white/20 transition-colors backdrop-blur-sm"
                                                        >
                                                            <div className={`w-2 h-2 rounded-full bg-linear-to-r ${activePhase.color} shadow-[0_0_10px_currentColor] shrink-0`} />
                                                            <span className="text-sm text-zinc-100 font-medium">{point}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                    {/* MOBILE BOTTOM NAVIGATION BAR */}
                                    <div className="md:hidden w-full bg-black/40 backdrop-blur-2xl border-t border-white/10 px-6 py-4 pb-8 flex justify-between items-center z-50">
                                        {caseStudyData.map((phase, index) => {
                                            const isActive = index === activeTab;
                                            const Icon = phase.icon;
                                            return (
                                                <button
                                                    key={phase.id}
                                                    onClick={() => setActiveTab(index)}
                                                    className="relative flex flex-col items-center gap-1.5 group w-full"
                                                >
                                                    <div className={cn(
                                                        "w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300",
                                                        isActive ? "bg-white text-black scale-110 shadow-lg shadow-white/10" : "bg-white/5 text-zinc-500"
                                                    )}>
                                                        <Icon className="w-4 h-4" />
                                                    </div>
                                                    <span className={cn(
                                                        "text-[9px] font-bold uppercase tracking-wider transition-colors",
                                                        isActive ? "text-white" : "text-zinc-600"
                                                    )}>
                                                        {phase.title.slice(0, 4)}..
                                                    </span>

                                                    {isActive && (
                                                        <motion.div
                                                            layoutId="mobileTabIndicator"
                                                            className="absolute -top-4 w-1 h-1 rounded-full bg-white shadow-[0_0_8px_white]"
                                                        />
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>

                                </div>

                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
