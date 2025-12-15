"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Hamburger Button (Mobile Only) */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-6 right-6 z-50 p-3 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-white md:hidden hover:bg-white/10 transition-colors"
                aria-label="Open Menu"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 p-3 bg-white/5 rounded-full text-zinc-400 hover:text-white transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <nav className="flex flex-col items-center gap-8">
                            {NAV_ITEMS.map((item, idx) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="text-4xl font-heading font-bold text-white hover:text-accent transition-colors tracking-wider"
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-12 text-zinc-500 text-sm uppercase tracking-widest"
                        >
                            Subhadeep Mistri
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
