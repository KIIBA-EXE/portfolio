"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Retour à l'accueil
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Projets <span className="text-zinc-500">GitHub</span>
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-2xl">
                        Une collection de mes travaux open-source, expériences et applications complètes.
                        Chaque projet est une opportunité d'apprendre et d'innover.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-colors flex flex-col"
                        >
                            <div className="aspect-video w-full bg-zinc-800 relative overflow-hidden">
                                {/* Image Placeholder - Replace with actual Image component later */}
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-600 bg-zinc-900">
                                    <span className="text-xl font-bold opacity-20">{project.title}</span>
                                </div>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Link href={`/projects/${project.id}`} className="px-6 py-2 bg-white text-black rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all">
                                        Voir les détails
                                    </Link>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex gap-2">
                                        {project.tech.slice(0, 3).map((tech) => (
                                            <span key={tech} className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                                                +{project.tech.length - 3}
                                            </span>
                                        )}
                                    </div>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-white transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
