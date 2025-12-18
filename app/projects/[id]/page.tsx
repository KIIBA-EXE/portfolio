"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Calendar, Code2 } from "lucide-react";
import { projects } from "@/lib/data";
import { notFound } from "next/navigation";

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Projet introuvable</h1>
                    <Link href="/projects" className="text-zinc-400 hover:text-white underline">Retour aux projets</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-4 md:px-8">
            <article className="max-w-4xl mx-auto">
                <Link href="/projects" className="inline-flex items-center text-zinc-400 hover:text-white transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Retour aux projets
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">{project.title}</h1>
                        <p className="text-xl text-zinc-400 leading-relaxed text-balance">
                            {project.description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 mb-16">
                        <div className="md:col-span-2 space-y-8">
                            <div className="aspect-video w-full bg-zinc-900 rounded-xl overflow-hidden border border-white/10 flex items-center justify-center">
                                {/* Placeholder for project showcase image */}
                                <span className="text-zinc-700 font-medium">Image de présentation</span>
                            </div>

                            <div className="prose prose-invert max-w-none">
                                <h3 className="text-2xl font-bold text-white mb-4">À propos du projet</h3>
                                <p className="text-zinc-300 leading-relaxed">
                                    {project.fullDescription}
                                </p>
                                {/* Add more content paragraphs if available in data */}
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 space-y-6">
                                <div>
                                    <h4 className="text-sm font-medium text-zinc-500 mb-2 flex items-center gap-2">
                                        <Code2 className="w-4 h-4" /> Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="text-xs px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-200 border border-zinc-700">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/5">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-full px-4 py-3 bg-white text-black rounded-lg font-bold hover:bg-zinc-200 transition-colors"
                                    >
                                        <Github className="w-5 h-5 mr-2" />
                                        Voir sur GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </article>
        </main>
    );
}
