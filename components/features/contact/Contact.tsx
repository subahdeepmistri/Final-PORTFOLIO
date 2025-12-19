"use client";

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, MessageCircle, Phone, Send, Download, FileText, CheckCircle, Loader2 } from "lucide-react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as any).toString(),
            });
            setIsSuccess(true);
            (e.target as HTMLFormElement).reset();
            // Reset success message after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);
        } catch (error) {
            console.error("Submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="min-h-[100dvh] flex flex-col justify-center py-24 px-4 md:px-12 bg-black relative overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-linear-to-t from-zinc-900 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-16 text-center md:text-left"
                >
                    <h2 className="text-sm tracking-[0.3em] text-accent uppercase mb-4">Connection</h2>
                    <h3 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-white mb-4">
                        Let&apos;s Build <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-400 to-zinc-600">The Future.</span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* LEFT COLUMN: CONTACT FORM */}
                    <div className="flex flex-col gap-8">
                        <form
                            className="space-y-6"
                            onSubmit={handleSubmit}
                            name="contact"
                            data-netlify="true"
                            netlify-honeypot="bot-field"
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            <p className="hidden">
                                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-zinc-500">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Roronoya Zoro"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-hidden focus:border-accent focus:bg-white/10 transition-all font-mono"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-zinc-500">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="Zoro@example.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-hidden focus:border-accent focus:bg-white/10 transition-all font-mono"
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label htmlFor="phone" className="text-sm font-bold uppercase tracking-wider text-zinc-500">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="+91 8254738402"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-hidden focus:border-accent focus:bg-white/10 transition-all font-mono"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-zinc-500">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-hidden focus:border-accent focus:bg-white/10 transition-all font-mono resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || isSuccess}
                                className={`group w-full md:w-auto font-black uppercase tracking-widest py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-all ${isSuccess ? "bg-green-500 text-black cursor-default" : "bg-white text-black hover:bg-accent"}`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span>Transmiting...</span>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    </>
                                ) : isSuccess ? (
                                    <>
                                        <span>Transmission Sent</span>
                                        <CheckCircle className="w-4 h-4" />
                                    </>
                                ) : (
                                    <>
                                        <span>Send Transmission</span>
                                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* RIGHT COLUMN: INFO & RESUME */}
                    <div className="flex flex-col gap-8">

                        {/* PROMINENT RESUME CARD */}
                        <motion.a
                            href="/resume.pdf"
                            download="Subhadeep_Mistri_Resume.pdf"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative group w-full overflow-hidden rounded-3xl bg-amber-400 p-8 flex items-center justify-between shadow-xl shadow-amber-400/10 hover:shadow-amber-400/20 transition-all duration-300"
                        >
                            <div className="relative z-10 flex flex-col gap-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-black rounded-lg text-amber-400">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <span className="text-black/60 font-black text-xs uppercase tracking-widest">Subhadeep Mistri</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-heading font-black text-black leading-none">
                                    Download <br /> Resume
                                </h3>
                            </div>

                            <div className="relative z-10 w-16 h-16 rounded-full bg-black flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                                <Download className="w-8 h-8" />
                            </div>

                            {/* Texture Overlay */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
                        </motion.a>

                        {/* Contact Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Email Card */}
                            <a href="mailto:subhadeepmistri1990@gmail.com" className="group p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-white/20 transition-all overflow-hidden relative">
                                <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Mail className="w-6 h-6 text-zinc-400 mb-4 group-hover:text-blue-400 transition-colors" />
                                <h4 className="font-bold text-white mb-1">Email Me</h4>
                                <p className="text-xs text-zinc-500 font-mono truncate">subhadeepmistri1990@gmail.com</p>
                            </a>

                            {/* LinkedIn Card */}
                            <a href="https://linkedin.com/in/subhadeepmistri" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-2xl bg-[#0077b5] border border-white/5 hover:brightness-110 transition-all">
                                <Linkedin className="w-6 h-6 text-white mb-4" />
                                <h4 className="font-bold text-white mb-1">Connect</h4>
                                <p className="text-xs text-blue-100 font-mono">LinkedIn Profile</p>
                            </a>
                        </div>

                        {/* Additional Links Row */}
                        <div className="flex gap-4">
                            <a href="https://github.com/subahdeepmistri" target="_blank" rel="noopener noreferrer" className="flex-1 p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors text-zinc-300 hover:text-white">
                                <Github className="w-5 h-5" />
                                <span className="font-bold text-sm">GitHub</span>
                            </a>
                            <a href="https://www.instagram.com/roronoa._.zorox/" target="_blank" rel="noopener noreferrer" className="flex-1 p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors text-zinc-300 hover:text-white">
                                <Instagram className="w-5 h-5" />
                                <span className="font-bold text-sm">Insta</span>
                            </a>
                            <a href="https://wa.me/918250518317" target="_blank" rel="noopener noreferrer" className="flex-1 p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors text-zinc-300 hover:text-white">
                                <MessageCircle className="w-5 h-5" />
                                <span className="font-bold text-sm">Chat</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <footer className="mt-auto pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-sm max-w-7xl mx-auto w-full">
                <span>© 2025 Subhadeep Mistri. All Rights Reserved.</span>
                <span>Designed & Engineered in Kolkata.</span>
            </footer>
        </section >
    );
}
