"use client";

import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimationProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}

export const FadeIn = ({
    children,
    className,
    delay = 0,
    duration = 0.5,
    ...props
}: AnimationProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const ScaleIn = ({
    children,
    className,
    delay = 0,
    duration = 0.5,
    ...props
}: AnimationProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

interface StaggerProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}

export const StaggerContainer = ({
    children,
    className,
    staggerDelay = 0.1,
    ...props
}: StaggerProps) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({
    children,
    className,
    ...props
}: HTMLMotionProps<"div">) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const HoverCard = ({
    children,
    className,
    ...props
}: HTMLMotionProps<"div">) => {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};
