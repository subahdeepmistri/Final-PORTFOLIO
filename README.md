# ⚡ Cinematic Portfolio V2

> A futuristic, high-performance portfolio experience designed for the modern web.

![Portfolio Preview](/public/skills/bg-design.png)

## 🚀 Overview

This project is a **mobile-first, cinematic portfolio** built to showcase creative engineering and design skills. It moves beyond standard static sites by incorporating immersive holographic interactions, fluid gesture-based animations, and a polished dark-mode aesthetic.

The codebase is fully optimized for performance, accessibility, and responsiveness across all devices—from large desktop displays to mobile screens.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Directory)
-   **Core**: [React 18](https://react.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animation**: [Framer Motion](https://www.framer.com/motion/)
-   **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
-   **Icons**: [Lucide React](https://lucide.dev/)

## ✨ Key Features

### 📱 Fully Responsive & Mobile-First
-   **Adaptive Typography**: Utilizes `clamp()` based font sizing for perfect scaling on any screen.
-   **Touch-Optimized**: Custom "Mobile Navbar" with backdrop blur and large touch targets.
-   **Snap-Scroll Projects**: Mobile users enjoy a native-app-like horizontal carousel for browsing projects.

### 🎨 Visual Excellence
-   **Cinematic Hero**: Immersive background imagery with scroll-driven parallax effects.
-   **Skill Cards**: Custom-generated 8K abstract backgrounds (Cybernetic/Fluid/Circuitry) with "cinematic zoom" on hover.
-   **Photo Deck**: An infinite-looping, swipeable stack of memories in the About section.
-   **Custom Cursor**: A magnetic, trailing cursor that enhances interactivity (Desktop only).

### ⚡ Performance
-   **Zero Layout Shift**: Meticulously sized images and placeholder skeletons.
-   **Smooth Scrolling**: Integrated `Lenis` for buttery smooth scroll mechanics without the weight of heavy libraries.
-   **Static Export Ready**: Configured for `next export` to enable drag-and-drop deployment on Netlify/Vercel.

## 🏃‍♂️ Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/subahdeepmistri/Final-PORTFOLIO.git
    cd Final-PORTFOLIO
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:3000` to view the site.

## 📦 Deployment

This project is configured for **Static Export**.

To deploy manually (Drag & Drop):
1.  Run `npm run build`.
2.  Upload the `out` folder to Netlify.

*Recommended:* Connect this repository to **Netlify** or **Vercel** for automatic continuous deployment.

---

Designed & Developed by **Subhadeep Mistri**.
