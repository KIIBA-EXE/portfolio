"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";

export default function DansLesBottesPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-4 md:px-8">
            <article className="max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Retour à l'accueil
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {/* Header */}
                    <header className="mb-16 text-center md:text-left">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                            Dans les Bottes
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl leading-relaxed">
                            Mon expérience en alternance : Développement d'une plateforme web innovante pour le secteur agricole.
                        </p>
                    </header>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-3 gap-12">

                        {/* Left Content (2 cols) */}
                        <div className="md:col-span-2 space-y-12">

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Le Contexte</h2>
                                <p className="text-zinc-400 leading-relaxed text-lg">
                                    <strong className="text-white">Dans les Bottes</strong> est une entreprise qui propose des solutions pour rapprocher le grand public du monde agricole.
                                    En tant que développeur web en alternance, j'ai eu pour mission de concevoir et maintenir la plateforme numérique centrale de l'entreprise.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Mes Responsabilités</h2>
                                <ul className="space-y-4">
                                    {[
                                        "Développement Full-Stack de nouvelles fonctionnalités.",
                                        "Maintenance corrective et évolutive du site existant.",
                                        "Optimisation des performances et du SEO.",
                                        "Gestion de la base de données et des flux utilisateurs."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-zinc-300">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Compétences Développées</h2>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    Cette expérience m'a permis de solidifier mes acquis sur des technologies clés et d'appréhender les contraintes d'un environnement de production réel.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["Symfony", "PHP", "MySQL", "JavaScript", "Bootstrap", "Git", "Gestion de projet"].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-emerald-900/30 text-emerald-300 rounded-full text-sm border border-emerald-500/30">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </section>

                        </div>

                        {/* Right Sidebar (1 col) */}
                        <div className="space-y-8">
                            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 sticky top-32">
                                <div className="mb-6">
                                    <span className="text-xs font-bold tracking-wider text-zinc-500 uppercase">Entreprise</span>
                                    <h3 className="text-xl font-bold text-white mt-1">Dans les Bottes</h3>
                                </div>

                                <div className="mb-6">
                                    <span className="text-xs font-bold tracking-wider text-zinc-500 uppercase">Rôle</span>
                                    <h3 className="text-lg text-white mt-1">Développeur Web (Alternant)</h3>
                                </div>

                                <div className="mb-8">
                                    <span className="text-xs font-bold tracking-wider text-zinc-500 uppercase">Période</span>
                                    <h3 className="text-lg text-white mt-1">En cours</h3>
                                </div>

                                <a
                                    href="https://danslesbottes.fr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full px-4 py-3 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/20"
                                >
                                    Visiter le site
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                </a>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </article>
        </main>
    );
}
