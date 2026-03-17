"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Calendar } from "lucide-react";

export default function Timeline() {
    const { t } = useLanguage();

    const events = [
        {
            year: t.timeline.item1_year,
            title: t.timeline.item1_title,
            desc: t.timeline.item1_desc,
        },
        {
            year: t.timeline.item2_year,
            title: t.timeline.item2_title,
            desc: t.timeline.item2_desc,
        },
        {
            year: t.timeline.item3_year,
            title: t.timeline.item3_title,
            desc: t.timeline.item3_desc,
        },
    ];

    return (
        <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
            >
                {t.timeline.title}
            </motion.h2>

            <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-12">
                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative pl-6 md:pl-12"
                    >
                        {/* Dot */}
                        <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-zinc-900" />

                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                            <h3 className="text-lg font-bold text-zinc-100">{event.title}</h3>
                            <span className="text-sm font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 w-fit">
                                {event.year}
                            </span>
                        </div>
                        <p className="text-zinc-400 leading-relaxed max-w-2xl">
                            {event.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
