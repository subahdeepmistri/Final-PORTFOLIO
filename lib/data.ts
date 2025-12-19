export interface Project {
    slug: string;
    title: string;
    category: string;
    type: "dev" | "design";
    description: string;
    image: string;
    tech: string[];
    color: string;
    details: {
        challenge: string;
        solution: string;
        features: string[];
    };
    liveUrl?: string;
    repoUrl?: string;
    figmaUrl?: string;
}

export const projects: Project[] = [
    {
        slug: "personal-portfolio-website",
        title: "Personal Portfolio Website",
        category: "Web Design & Development",
        type: "dev",
        description: "A cinematic, portfolio experience showcasing UI/UX mastery and frontend skills.",
        image: "/placeholder-portfolio.jpg",
        tech: ["Next.js", "Framer Motion", "Tailwind"],
        color: "from-purple-500 to-indigo-500",
        details: {
            challenge: "Creating a portfolio that stands out in a saturated market while maintaining high performance and accessibility.",
            solution: "Implemented a 'Digital Realm' concept with immersive holographic interactions, smooth scrolling, and optimized animations.",
            features: [
                "Custom Framer Motion animations",
                "Lenis smooth scrolling integration",
                "Dynamic holographic project cards",
                "Responsive grid layouts"
            ]
        },
        liveUrl: "https://portfolio-final99.netlify.app/",
        repoUrl: "https://github.com/subahdeepmistri/Final-PORTFOLIO"
    },
    {
        slug: "music-player-app",
        title: "Music Player App",
        category: "Mobile UI Design",
        type: "design",
        description: "An intuitive music player interface focusing on fluid interactions and visual harmony.",
        image: "/placeholder-music.jpg",
        tech: ["Figma", "Prototyping", "Motion UI"],
        color: "from-emerald-400 to-cyan-500",
        details: {
            challenge: "Designing a music player that feels intuitive yet visually distinct from major competitors.",
            solution: "Focused on gesture-based controls and a fluid, liquid-motion visualizer that reacts to audio frequencies.",
            features: [
                "Gesture-based playback controls",
                "Real-time audio visualization",
                "Adaptive color themes based on album art",
                "Seamless offline mode"
            ]
        },
        liveUrl: "https://spidey-player.netlify.app/",
        // repoUrl: "https://github.com/subahdeepmistri/Spidey-Player", // Swapped for Figma as requested
        figmaUrl: "https://www.figma.com/file/music-player-app"
    },
    {
        slug: "recipe-page",
        title: "Recipe Page",
        category: "Frontend Dev",
        type: "dev",
        description: "A clean, accessible, and responsive recipe page with dynamic serving adjustments.",
        image: "/placeholder-recipe.jpg",
        tech: ["HTML/CSS", "JavaScript", "Responsive"],
        color: "from-orange-400 to-red-500",
        details: {
            challenge: "Building a complex layout that remains legible and functional across all device sizes without relying on heavy frameworks.",
            solution: "Utilized CSS Grid and Flexbox for a robust layout system, with vanilla JS for serving size calculations.",
            features: [
                "Dynamic ingredient scaling",
                "Print-optimized stylesheet",
                "Semantic HTML5 structure",
                "Interactive cooking timer"
            ]
        },
        liveUrl: "https://restaurant-food-landing-page.netlify.app/",
        repoUrl: "https://github.com/subahdeepmistri/restaurant-food-landing-page"
    },
    {
        slug: "workout-planner",
        title: "Workout Planner",
        category: "Web Application",
        type: "dev",
        description: "A comprehensive fitness tracking tool for planning workouts and monitoring progress.",
        image: "/placeholder-workout.jpg",
        tech: ["Next.js", "Prisma", "PostgreSQL"],
        color: "from-blue-600 to-cyan-400",
        details: {
            challenge: "Users needed a flexible way to create custom routines without being locked into preset programs.",
            solution: "Developed a drag-and-drop interface for building workouts with a progress tracking dashboard.",
            features: [
                "Custom routine builder",
                "Progress visualization charts",
                "Exercise history tracking",
                "Mobile-responsive interface"
            ]
        },
        liveUrl: "https://workout-planner-sexie-spidey.netlify.app/",
        repoUrl: "https://github.com/subahdeepmistri/WorkOut-Planner"
    },
    {
        slug: "relationship-countdown",
        title: "Relationship Countdown",
        category: "Mobile App",
        type: "dev",
        description: "A dedicated space to track relationship milestones and shared memories.",
        image: "/placeholder-relationship.jpg",
        tech: ["React Native", "Firebase", "Expo"],
        color: "from-rose-400 to-pink-600",
        details: {
            challenge: "Couples often forget exact milestone dates and want a private space for shared memories.",
            solution: "Built a countdown engine with a shared gallery and event reminders.",
            features: [
                "Precise milestone countdowns",
                "Shared photo memory wall",
                "Anniversary reminders",
                "Customizable themes"
            ]
        },
        liveUrl: "https://relationship-app-demo.vercel.app",
        repoUrl: "https://github.com/subhadeepmistri/relationship-countdown"
    },
    {
        slug: "crypto-dashboard-ui",
        title: "Crypto Dashboard UI",
        category: "UI/UX Design",
        type: "design",
        description: "A futuristic data visualization dashboard for cryptocurrency trading and analytics.",
        image: "/placeholder-crypto.jpg",
        tech: ["Figma", "Auto Layout", "Components"],
        color: "from-indigo-500 to-purple-800",
        details: {
            challenge: "Presenting complex financial data without overwhelming the user.",
            solution: "Used a dark glassmorphism theme with neon accents to hierarchically organize information.",
            features: [
                "Interactive candlestick charts",
                "Real-time asset tracking components",
                "Custom icon set",
                "Dark/Light mode variants"
            ]
        },
        figmaUrl: "https://www.figma.com/file/crypto-dashboard"
    },
    {
        slug: "travel-app-concept",
        title: "Travel App Concept",
        category: "UI/UX Design",
        type: "design",
        description: "An immersive travel booking experience focusing on visual exploration.",
        image: "/placeholder-travel.jpg",
        tech: ["Figma", "Prototyping", "UX Research"],
        color: "from-teal-400 to-blue-500",
        details: {
            challenge: "Reducing friction in the travel booking process while keeping it inspiring.",
            solution: "Designed a card-based swipe interface for destination discovery.",
            features: [
                " immersive destination galleries",
                "Smart itinerary builder",
                "Augmented reality explorer",
                "Social travel sharing flow"
            ]
        },
        figmaUrl: "https://www.figma.com/file/travel-app"
    }
];

export type SkillIconName = "code" | "palette" | "terminal";

export interface SkillCategory {
    category: string;
    icon: SkillIconName;
    items: string[];
    image: string;
}

export const skills: SkillCategory[] = [
    {
        category: "Frontend Engineering",
        icon: "code",
        items: ["React", "Tailwind CSS", "TypeScript", "HTML5/CSS3", "JavaScript"],
        image: "/skills/bg-frontend.png"
    },
    {
        category: "UI/UX Design",
        icon: "palette",
        items: ["Figma", "Wireframing", "Prototyping", "User Research", "Adobe Suite", "Responsive Design"],
        image: "/skills/bg-design.png"
    },
    {
        category: "Tools & Workflow",
        icon: "terminal",
        items: ["Git/GitHub", "GitLab", "VS Code", "Canva", "Vercel", "Performance Tuning"],
        image: "/skills/bg-tools.png"
    }
];
