"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Code2, Smartphone, Database, Server } from "lucide-react";
import TiltWrapper from "@/components/ui/TiltWrapper";

export default function Services() {
    const { t } = useLanguage();

    const services = [
        {
            title: t.services.web_title,
            desc: t.services.web_desc,
            icon: <Code2 className="w-10 h-10 text-blue-400" />,
            gradient: "from-blue-500/20 to-cyan-500/20"
        },
        {
            title: t.services.mobile_title,
            desc: t.services.mobile_desc,
            icon: <Smartphone className="w-10 h-10 text-purple-400" />,
            gradient: "from-purple-500/20 to-pink-500/20"
        },
        {
            title: t.services.backend_title,
            desc: t.services.backend_desc,
            icon: <Database className="w-10 h-10 text-emerald-400" />,
            gradient: "from-emerald-500/20 to-teal-500/20"
        }
    ];

    return (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
            >
                {t.services.title}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <TiltWrapper key={index} className="h-full">
                        <div className={`h-full p-6 md:p-8 rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-sm hover:bg-zinc-900/80 transition-all group relative overflow-hidden`}>
                            {/* Radial Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="mb-6 p-3 bg-zinc-950/50 rounded-xl w-fit border border-white/5">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-zinc-100 mb-3">{service.title}</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    </TiltWrapper>
                ))}
            </div>
        </section>
    );
}
