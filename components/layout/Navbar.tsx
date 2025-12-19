"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for glassmorphism
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* MAIN HEADER BAR (Fixed Top) */}
            <motion.header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 transform",
                    scrolled ? "bg-black/60 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* LOGO / NAME */}
                <Link href="/" className="group relative z-50">
                    <span className="text-xl md:text-2xl font-heading font-black text-white tracking-widest group-hover:text-zinc-200 transition-colors">
                        SM<span className="text-accent">.</span>
                    </span>
                </Link>

                {/* DESKTOP NAV & ICONS */}
                <div className="hidden md:flex items-center gap-8">
                    {/* Social Icons */}
                    <div className="flex items-center gap-4 border-r border-white/10 pr-8">
                        <a
                            href="https://github.com/subahdeepmistri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com/in/subhadeepmistri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-[#0077b5] transition-colors hover:scale-110 transform duration-200"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Nav Links */}
                    <nav className="flex items-center gap-6">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors tracking-wide uppercase"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <Link
                        href="#contact"
                        className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-bold uppercase tracking-widest transition-all"
                    >
                        Let&apos;s Talk
                    </Link>
                </div>

                {/* MOBILE HAMBURGER */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="md:hidden relative z-50 p-2 text-white hover:text-accent transition-colors"
                    aria-label="Open Menu"
                >
                    <Menu className="w-6 h-6" />
                </button>
            </motion.header>

            {/* MOBILE FULL SCREEN MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
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

                        {/* Mobile Socials */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-12 flex flex-col items-center gap-6"
                        >
                            <div className="flex gap-6">
                                <a href="https://github.com/subahdeepmistri" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="https://linkedin.com/in/subhadeepmistri" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-[#0077b5]">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="https://wa.me/918250518317" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-[#25D366]">
                                    <MessageCircle className="w-6 h-6" />
                                </a>
                            </div>
                            <span className="text-zinc-600 text-xs uppercase tracking-widest">
                                Subhadeep Mistri
                            </span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
