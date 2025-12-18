"use client";

import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="relative w-full max-w-7xl mx-auto py-24 px-4 md:px-8 z-10">
            <div className="grid md:grid-cols-2 gap-12 items-start">

                {/* Bio Column */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-white mb-6">À propos de moi</h2>
                    <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
                        <p>
                            Je m’appelle <strong className="text-white">Mathieu Mistretta</strong>. Je vis à Lens et je suis étudiant en licence informatique générale à la <strong className="text-white">Haute École d’Arras</strong>.
                            Après un BTS SIO option développement, je poursuis mes études pour renforcer mes compétences techniques.
                        </p>
                        <p>
                            Curieux et autonome, j'aime transformer des idées en solutions fonctionnelles. Je m'intéresse autant à la technique qu'à l'expérience utilisateur.
                        </p>
                        <p>
                            En parallèle, je développe de nombreux projets personnels (jeux, IA, No-Code).
                        </p>
                    </div>
                </motion.div>

                {/* Experience/Education Column */}
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            Expériences
                        </h3>
                        <div className="space-y-8 border-l border-zinc-800 pl-8 relative">
                            <div className="relative">
                                <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-zinc-900 border-2 border-emerald-500" />
                                <h4 className="text-white font-semibold">Alternant Développeur Web</h4>
                                <p className="text-emerald-400 text-sm mb-2">Dans les Bottes • En cours</p>
                                <p className="text-zinc-500 text-sm">Développement web, gestion de fonctionnalités et maintenance sur des projets concrets.</p>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-zinc-900 border-2 border-zinc-700" />
                                <h4 className="text-white font-semibold">Stages Professionnels</h4>
                                <p className="text-zinc-500 text-sm mb-2">Akkodys, Conseil Départemental d'Arras</p>
                                <p className="text-zinc-500 text-sm">Découverte d'environnements professionnels et bonnes pratiques.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            Formation
                        </h3>
                        <div className="space-y-8 border-l border-zinc-800 pl-8 relative">
                            <div className="relative">
                                <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-zinc-900 border-2 border-blue-500" />
                                <h4 className="text-white font-semibold">Licence Informatique Générale</h4>
                                <p className="text-blue-400 text-sm mb-2">Haute École d’Arras • En cours</p>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-zinc-900 border-2 border-zinc-700" />
                                <h4 className="text-white font-semibold">BTS SIO (Option SLAM)</h4>
                                <p className="text-zinc-500 text-sm mb-2">Diplômé</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
