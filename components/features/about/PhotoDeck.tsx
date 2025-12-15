"use client";

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { MoveRight } from "lucide-react";
import Image from "next/image";

// Placeholder data - User should replace these src paths
const PHOTOS = [
    {
        id: 1,
        src: "/about/photo-snow-1.jpg",
        alt: "Winter Wanderings",
        color: "bg-slate-400"
    },
    {
        id: 2,
        src: "/about/photo-1.jpg",
        alt: "The Wizarding World",
        color: "bg-blue-500"
    },
    {
        id: 3,
        src: "/about/photo-2.jpg",
        alt: "Midnight Vibes",
        color: "bg-purple-500"
    },
    {
        id: 4,
        src: "/about/photo-setup.jpg",
        alt: "The Command Center",
        color: "bg-zinc-800"
    },
    {
        id: 5,
        src: "/about/photo-3.jpg",
        alt: "Quiet Reading",
        color: "bg-emerald-500"
    },
    {
        id: 6,
        src: "/about/photo-bike.jpg",
        alt: "Road Crew",
        color: "bg-yellow-500",
        position: "50% 20%"
    },
    {
        id: 7,
        src: "/about/photo-stairs.jpg",
        alt: "Urban Explorer",
        color: "bg-red-500"
    },
    {
        id: 8,
        src: "/about/photo-bookstore.jpg",
        alt: "Between Content",
        color: "bg-indigo-400"
    },
    {
        id: 9,
        src: "/about/photo-snow-2.jpg",
        alt: "Frost & Fashion",
        color: "bg-blue-600"
    },
];

export default function PhotoDeck() {
    // Initialize with a unique render key to allow recycling
    const [cards, setCards] = useState(() =>
        [...PHOTOS].reverse().map(photo => ({ ...photo, renderId: `${photo.id}-init` }))
    );

    // Function to handle card cycling (infinite loop)
    const cycleCard = (id: number) => {
        setCards((prev) => {
            const topCard = prev[prev.length - 1];
            // Safety check to ensure we are cycling the correct card
            if (topCard.id !== id) return prev;

            // Create a new version of the card with a new ID to trigger animation
            const recycledCard = { ...topCard, renderId: `${topCard.id}-${Date.now()}` };

            // Remove from top (end), add to bottom (start)
            return [recycledCard, ...prev.slice(0, -1)];
        });
    };

    // Card swipe logic
    const handleDragEnd = (info: PanInfo, id: number) => {
        const threshold = 100; // Drag distance to trigger swipe
        if (Math.abs(info.offset.x) > threshold) {
            cycleCard(id);
        }
    };

    return (
        <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center perspective-1000">
            <div className="relative w-full h-full max-w-sm aspect-3/4">

                <AnimatePresence>
                    {cards.map((card, index) => {
                        // Only render the top few cards for performance and visual clarity
                        const isTop = index === cards.length - 1;
                        const isSecond = index === cards.length - 2;

                        if (index < cards.length - 2) return null; // Hide cards deep in the stack

                        return (
                            <motion.div
                                key={card.renderId}
                                className={`absolute inset-0 rounded-2xl shadow-2xl overflow-hidden border border-white/10 ${card.color} bg-zinc-800`}
                                style={{
                                    zIndex: index,
                                }}
                                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                                animate={{
                                    scale: isTop ? 1 : 0.95 + (index - (cards.length - 2)) * 0.05, // Slight scale step
                                    y: isTop ? 0 : 10,
                                    opacity: 1,
                                    rotate: isTop ? 0 : (index % 2 === 0 ? 3 : -3), // Random-ish rotation for stack effect
                                }}
                                exit={{
                                    x: index % 2 === 0 ? -300 : 300,
                                    opacity: 0,
                                    rotate: index % 2 === 0 ? -20 : 20,
                                    transition: { duration: 0.4 }
                                }}
                                drag={isTop ? "x" : false} // Only top card is draggable
                                dragConstraints={{ left: 0, right: 0 }} // Snap back if not swiped far enough purely by physics, but we handle removal manually
                                dragElastic={0.6}
                                onDragEnd={(_, info) => isTop && handleDragEnd(info, card.id)}
                                whileTap={{ cursor: "grabbing" }}
                                whileHover={{ cursor: isTop ? "grab" : "default" }}
                            >
                                {/* We would use Next.js Image here, but for the placeholder logic I'll use a colored div + text or an img tag if available */}
                                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                                    {card.src ? (
                                        <Image
                                            src={card.src}
                                            alt={card.alt}
                                            fill
                                            className="object-cover pointer-events-none"
                                            style={{ objectPosition: (card as { position?: string }).position || "center" }}
                                            sizes="(max-width: 768px) 100vw, 400px"
                                        />
                                    ) : (
                                        <>
                                            <div className={`w-full h-full opacity-50 ${card.color}`} />
                                            <span className="absolute text-4xl font-bold text-white/20 uppercase tracking-widest -rotate-45">
                                                {card.alt}
                                            </span>
                                        </>
                                    )}
                                </div>

                                {/* Card Overlay UI */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent">
                                    <div className="flex justify-between items-center">
                                        <span className="text-white font-bold font-heading uppercase tracking-wider">{card.alt}</span>
                                        <span className="text-xs font-mono text-zinc-400">0{card.id} / 09</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Instruction / Controls */}
            {cards.length > 0 && (
                <div className="absolute bottom-4 md:bottom-10 flex gap-8 text-white/30 text-xs font-mono tracking-widest uppercase pointer-events-none">
                    <span className="flex items-center gap-2">Swipe to Cycle <MoveRight className="w-4 h-4 ml-1" /></span>
                </div>
            )}
        </div>
    );
}
