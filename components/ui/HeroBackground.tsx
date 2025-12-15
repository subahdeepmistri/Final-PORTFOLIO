"use client";


import Image from "next/image";

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Background Image - Native IMG Tag to Bypass Next.js Issues */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg-v3.jpg"
                    alt="Hero Background"
                    className="w-full h-full object-cover object-left scale-105"
                />
            </div>

            {/* Dark Gradient Overlay for Text Visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10" />

            {/* Cinematic Vignette */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-black/40 z-20" />
        </div>
    );
}
