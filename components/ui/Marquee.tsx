"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

export const Marquee = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: React.ReactNode[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerDirection = direction === "left" ? "flex-row" : "flex-row-reverse";
    const speedDuration = {
        fast: 20,
        normal: 40,
        slow: 80,
    };

    return (
        <div
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <motion.div
                className={cn("flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap", containerDirection)}
                animate={{
                    x: direction === "left" ? "-50%" : "0%",
                }}
                transition={{
                    duration: speedDuration[speed],
                    ease: "linear",
                    repeat: Infinity,
                }}
                initial={{ x: "0%" }}
            >
                {items.map((item, idx) => (
                    <div
                        className="relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
                        key={idx}
                    >
                        {item}
                    </div>
                ))}
                {items.map((item, idx) => (
                    <div
                        className="relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
                        key={idx + items.length}
                    >
                        {item}
                    </div>
                ))}
            </motion.div>

        </div>
    );
};


export const TechMarquee = ({
    items,
    className
}: { items: React.ReactNode[], className?: string }) => {
    return (
        <div className={cn("flex overflow-hidden w-full", className)}>
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                className="flex flex-shrink-0 gap-4 pr-4"
            >
                {[...items, ...items].map((item, i) => (
                    <div key={i} className="flex-shrink-0">
                        {item}
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
