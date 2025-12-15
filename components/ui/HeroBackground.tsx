"use client";


import Image from "next/image";

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
            {/* Background Image with Glass/Blur Effect */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/backgrounds/hero-mountains.jpg"
                    alt="Background"
                    fill
                    className="object-cover blur-[1px] scale-[2] md:scale-[1.5] opacity-90 -rotate-90"
                    priority
                />
                {/* Lighter Frosted Glass Overlay */}
                <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
            </div>

            {/* Abstract Grid / Mesh */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>



            {/* Cinematic Vignette */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black" />
        </div>
    );
}
