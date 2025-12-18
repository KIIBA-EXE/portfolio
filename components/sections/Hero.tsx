"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { useLanguage } from "@/components/providers/LanguageProvider";

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="relative w-full max-w-7xl mx-auto pt-40 pb-24 px-4 md:px-8 flex flex-col items-center text-center z-10 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-radial from-white/10 to-transparent opacity-50 blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-8 hover:bg-zinc-900 transition-colors cursor-default"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-sm text-zinc-300 font-medium">{t.hero.badge}</span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
            >
                <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6">
                    {t.hero.title1}
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 animate-gradient">
                        {t.hero.title2}
                    </span>
                </h1>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed text-balance mb-10"
            >
                {t.hero.subtitle}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                className="flex flex-col md:flex-row gap-4 items-center"
            >
                <Link href="/projects" className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-950">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-zinc-900">
                        {t.hero.cta_primary}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                </Link>

                <a href="#contact" className="px-8 py-3 rounded-full text-zinc-300 hover:text-white font-medium transition-colors text-sm">
                    {t.hero.cta_secondary}
                </a>
            </motion.div>

        </section>
    );
};

export default Hero;
