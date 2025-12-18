"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({ name: "", email: "", content: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", content: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-2 gap-12"
            >
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
                        Une idée en tête ? <br />
                        <span className="text-zinc-500">Discutons-en.</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-md mb-8">
                        Je suis toujours à la recherche de nouveaux défis. Que ce soit pour un projet freelance, une collaboration ou juste pour dire bonjour.
                    </p>
                    <div className="space-y-4">
                        <a href="mailto:contact@kiiba.dev" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
                            <span className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                                <Send className="w-5 h-5" />
                            </span>
                            <div>
                                <h4 className="font-semibold">Email</h4>
                                <p className="text-zinc-500 text-sm">mathieu.mistrettapro@gmail.com</p>
                            </div>
                        </a>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="bg-zinc-900/30 border border-white/5 p-8 rounded-2xl backdrop-blur-sm">
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-zinc-400">Nom</label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all placeholder:text-zinc-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all placeholder:text-zinc-600"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all placeholder:text-zinc-600 resize-none"
                                placeholder="Parlez-moi de votre projet..."
                            />
                        </div>

                        <button
                            disabled={status === "loading" || status === "success"}
                            className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {status === "loading" ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : status === "success" ? (
                                <>
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                    Message envoyé !
                                </>
                            ) : (
                                "Envoyer le message"
                            )}
                        </button>
                    </div>
                </form>
            </motion.div>
        </section>
    );
}
