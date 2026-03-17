"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiThreedotjs, SiChartdotjs, SiMongodb, SiSocketdotio, SiOpenai } from "react-icons/si";

const projects = [
    {
        title: "Space Portfolio",
        description: "A 3D interactive portfolio website built with Next.js, Three.js, and Framer Motion.",
        icons: [<SiNextdotjs className="w-5 h-5 text-white" />, <SiThreedotjs className="w-5 h-5 text-white" />, <SiReact className="w-5 h-5 text-[#61DAFB]" />, <SiTailwindcss className="w-5 h-5 text-[#38B2AC]" />],
        links: { demo: "#", code: "#" },
    },
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing sales, inventory, and analytics using modern web technologies.",
        icons: [<SiReact className="w-5 h-5 text-[#61DAFB]" />, <SiTypescript className="w-5 h-5 text-[#3178C6]" />, <SiChartdotjs className="w-5 h-5 text-[#FF6384]" />],
        links: { demo: "#", code: "#" },
    },
    {
        title: "AI Chat Application",
        description: "Real-time chat application powered by AI, supporting multiple languages and instant translation.",
        icons: [<SiNextdotjs className="w-5 h-5 text-white" />, <SiOpenai className="w-5 h-5 text-[#412991]" />, <SiSocketdotio className="w-5 h-5 text-white" />, <SiMongodb className="w-5 h-5 text-[#47A248]" />],
        links: { demo: "#", code: "#" },
    },
];

const Projects = () => {
    return (
        <section id="projects" className="w-full min-h-screen flex flex-col justify-center items-center py-20 px-4 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4 tracking-tight">
                    Selected Works
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-white/0 hover:from-purple-500/50 hover:to-cyan-500/50 transition-all duration-300"
                    >
                        <div className="relative h-full bg-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl p-8 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col h-full">
                                <h3 className="text-2xl font-bold font-heading text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-6 leading-relaxed font-light flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-4 mb-8">
                                    {project.icons.map((icon, i) => (
                                        <div key={i} className="p-2 bg-white/5 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors">
                                            {icon}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-white/5">
                                    <a href={project.links.code} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group/link">
                                        <Github className="w-4 h-4" />
                                        <span className="group-hover/link:underline">Code</span>
                                    </a>
                                    <a href={project.links.demo} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group/link">
                                        <ExternalLink className="w-4 h-4" />
                                        <span className="group-hover/link:underline">Live Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
