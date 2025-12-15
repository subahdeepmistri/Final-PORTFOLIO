"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="min-h-[100dvh] flex flex-col justify-between pt-20 pb-12 md:py-24 px-4 md:px-12 bg-black relative overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-linear-to-t from-zinc-900 to-transparent pointer-events-none" />

            <div className="max-w-5xl mx-auto w-full grow flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-16"
                >
                    <h2 className="text-sm tracking-[0.3em] text-accent uppercase mb-4">Connection</h2>
                    <h3 className="text-4xl sm:text-5xl md:text-8xl font-heading font-black text-white mb-6 md:mb-8">
                        Let&apos;s Build <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-400 to-zinc-600">The Future.</span>
                    </h3>
                    <p className="text-zinc-400 max-w-xl text-lg font-light">
                        Open for collaborations, freelance projects, and full-time opportunities.
                        Ready to translate your vision into a digital masterpiece?
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
                    {/* Email Card - Ultra Compact & Centered */}
                    <a href="mailto:subhadeepmistri1990@gmail.com" className="group relative overflow-hidden rounded-3xl p-4 md:px-5 md:py-4 bg-zinc-900/50 border border-white/5 hover:bg-zinc-800 transition-all duration-300 flex flex-col justify-center">
                        <div className="absolute inset-0 bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex items-center gap-3 md:gap-4">
                            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white/5 group-hover:bg-indigo-500 flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-indigo-500/25 shrink-0">
                                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <h3 className="text-sm md:text-base font-bold text-white group-hover:text-indigo-300 transition-colors mb-0.5">Email Me</h3>
                                <p className="text-xs text-zinc-400 font-medium truncate group-hover:text-white/90 transition-colors">subhadeepmistri1990@gmail.com</p>
                            </div>

                            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition-all shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            </div>
                        </div>
                    </a>

                    {/* Phone Card - Horizontal Grid on Desktop for Minimized Height */}
                    <div className="relative overflow-hidden rounded-3xl p-4 md:px-5 md:py-4 bg-zinc-900/50 border border-white/5 hover:border-emerald-500/30 transition-all duration-300">
                        <div className="absolute inset-0 bg-linear-to-r from-emerald-500/5 to-transparent pointer-events-none" />

                        <div className="relative z-10 flex flex-col gap-3 md:gap-0">
                            <div className="flex items-center gap-3 md:gap-2 mb-1 md:mb-3">
                                <div className="w-10 h-10 md:w-8 md:h-8 rounded-xl bg-white/5 flex items-center justify-center text-white shadow-lg shrink-0">
                                    <Phone className="w-4 h-4 md:w-3.5 md:h-3.5" />
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <h3 className="text-sm md:text-base font-bold text-white">Call Me</h3>
                                    <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider hidden md:block">Available on WhatsApp</p>
                                </div>
                            </div>

                            <div className="flex flex-col md:grid md:grid-cols-2 gap-2 md:gap-3">
                                <a href="tel:+918250518317" className="flex items-center justify-between p-2.5 md:p-2 rounded-lg bg-white/5 hover:bg-emerald-500/20 border border-white/5 hover:border-emerald-500/50 transition-all group">
                                    <div className="flex items-center gap-2">
                                        <span className="w-5 h-5 md:w-4 md:h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] md:text-[9px] font-bold">01</span>
                                        <span className="text-sm md:text-xs font-mono text-zinc-300 group-hover:text-white transition-colors">+91 82505 18317</span>
                                    </div>
                                    <Phone className="w-3 h-3 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                                </a>
                                <a href="tel:+919062187040" className="flex items-center justify-between p-2.5 md:p-2 rounded-lg bg-white/5 hover:bg-emerald-500/20 border border-white/5 hover:border-emerald-500/50 transition-all group">
                                    <div className="flex items-center gap-2">
                                        <span className="w-5 h-5 md:w-4 md:h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] md:text-[9px] font-bold">02</span>
                                        <span className="text-sm md:text-xs font-mono text-zinc-300 group-hover:text-white transition-colors">+91 90621 87040</span>
                                    </div>
                                    <Phone className="w-3 h-3 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Grid - Mobile: 2 cols, Desktop: Flex row */}
                <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4 md:gap-6">
                    <a href="https://github.com/subahdeepmistri" target="_blank" rel="noopener noreferrer"
                        className="group flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 px-4 py-4 md:px-8 md:py-4 rounded-2xl md:rounded-full bg-white text-black font-bold text-sm md:text-lg hover:bg-zinc-200 hover:scale-[1.02] transition-all">
                        <Github className="w-5 h-5 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                        <span>GitHub</span>
                    </a>

                    <a href="https://linkedin.com/in/subhadeepmistri" target="_blank" rel="noopener noreferrer"
                        className="group flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 px-4 py-4 md:px-8 md:py-4 rounded-2xl md:rounded-full bg-[#0077b5] text-white font-bold text-sm md:text-lg hover:brightness-110 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#0077b5]/30 transition-all">
                        <Linkedin className="w-5 h-5 md:w-5 md:h-5" />
                        <span>LinkedIn</span>
                    </a>

                    <a href="https://www.instagram.com/roronoa._.zorox/" target="_blank" rel="noopener noreferrer"
                        className="group flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 px-4 py-4 md:px-8 md:py-4 rounded-2xl md:rounded-full bg-linear-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-bold text-sm md:text-lg hover:brightness-110 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#fd1d1d]/30 transition-all">
                        <Instagram className="w-5 h-5 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                        <span>Instagram</span>
                    </a>

                    <a href="https://wa.me/918250518317" target="_blank" rel="noopener noreferrer"
                        className="group flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 px-4 py-4 md:px-8 md:py-4 rounded-2xl md:rounded-full bg-[#25D366] text-white font-bold text-sm md:text-lg hover:brightness-110 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#25D366]/30 transition-all">
                        <MessageCircle className="w-5 h-5 md:w-5 md:h-5" />
                        <span>WhatsApp</span>
                    </a>
                </div>
            </div>

            <footer className="mt-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-sm">
                <span>© 2025 Subhadeep Mistri. All Rights Reserved.</span>
                <span>Designed & Engineered in Kolkata.</span>
            </footer>
        </section>
    );
}
