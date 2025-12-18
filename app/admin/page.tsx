"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader2, LogOut, MessageSquare, Plus } from "lucide-react";

interface Message {
    id: string;
    name: string;
    email: string;
    content: string;
    createdAt: string;
    read: boolean;
}

export default function AdminDashboard() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);
    const [updates, setUpdates] = useState<any[]>([]);
    const [newUpdate, setNewUpdate] = useState({ title: "", content: "" });

    // Protected Route
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    // Fetch data
    useEffect(() => {
        if (status === "authenticated") {
            fetch("/api/contact")
                .then(res => res.json())
                .then(data => {
                    setMessages(data);
                    setLoading(false);
                })
                .catch(err => console.error(err));

            fetch("/api/updates")
                .then(res => res.json())
                .then(data => setUpdates(data))
                .catch(err => console.error(err));
        }
    }, [status]);

    const deleteMessage = async (id: string) => {
        if (!confirm("Supprimer ce message ?")) return;

        const res = await fetch(`/api/contact?id=${id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            setMessages(messages.filter(m => m.id !== id));
        }
    };

    const deleteUpdate = async (id: string) => {
        if (!confirm("Supprimer cette mise à jour ?")) return;

        const res = await fetch(`/api/updates?id=${id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            setUpdates(updates.filter(u => u.id !== id));
        }
    };

    const handleAddUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch("/api/updates", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUpdate)
        });

        if (res.ok) {
            const update = await res.json();
            setUpdates([update, ...updates]);
            setNewUpdate({ title: "", content: "" });
        }
    };

    if (status === "loading" || loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white">
                <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
            </div>
        );
    }

    if (!session) return null;

    return (
        <div className="min-h-screen bg-[#050505] text-white pt-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <header className="flex items-center justify-between mb-12">
                    <div>
                        <h1 className="text-3xl font-bold">Dashboard</h1>
                        <p className="text-zinc-400">Bienvenue, {session.user?.email}</p>
                    </div>
                    <button
                        onClick={() => signOut()}
                        className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm transition-colors border border-zinc-700"
                    >
                        <LogOut className="w-4 h-4" />
                        Déconnexion
                    </button>
                </header>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Messages Section */}
                    <section className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 h-fit">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <MessageSquare className="w-5 h-5 text-emerald-500" />
                                Messages Reçus
                            </h2>
                            <span className="bg-zinc-800 px-2 py-1 rounded text-xs text-zinc-400">{messages.length}</span>
                        </div>

                        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                            {messages.length === 0 ? (
                                <p className="text-zinc-500 text-center py-8">Aucun message pour le moment.</p>
                            ) : (
                                messages.map((msg) => (
                                    <div key={msg.id} className="p-4 bg-zinc-800/50 border border-white/5 rounded-xl hover:border-white/10 transition-colors">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-semibold text-white">{msg.name}</h4>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-zinc-500">{new Date(msg.createdAt).toLocaleDateString()}</span>
                                                <button
                                                    onClick={() => deleteMessage(msg.id)}
                                                    className="text-red-400 hover:text-red-300 transition-colors p-1"
                                                    title="Supprimer"
                                                >
                                                    <LogOut className="w-3 h-3 rotate-180" />
                                                </button>
                                            </div>
                                        </div>
                                        <p className="text-sm text-zinc-400 mb-2">{msg.email}</p>
                                        <p className="text-sm text-zinc-300 bg-zinc-900/50 p-3 rounded-lg border border-black/20 text-balance break-words">
                                            {msg.content}
                                        </p>
                                    </div>
                                ))
                            )}
                        </div>
                    </section>

                    {/* Updates Section */}
                    <section className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 h-fit">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <Plus className="w-5 h-5 text-blue-500" />
                                Projets en cours
                            </h2>
                        </div>

                        <form onSubmit={handleAddUpdate} className="mb-8 space-y-4 bg-zinc-800/30 p-4 rounded-xl border border-white/5">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-zinc-400 uppercase">Titre</label>
                                <input
                                    required
                                    value={newUpdate.title}
                                    onChange={(e) => setNewUpdate({ ...newUpdate, title: e.target.value })}
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2 text-sm text-white focus:border-blue-500 outline-none transition-colors"
                                    placeholder="Ex: Refonte terminée"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-zinc-400 uppercase">Contenu</label>
                                <textarea
                                    required
                                    value={newUpdate.content}
                                    onChange={(e) => setNewUpdate({ ...newUpdate, content: e.target.value })}
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2 text-sm text-white focus:border-blue-500 outline-none transition-colors resize-none"
                                    placeholder="Détails de l'avancement..."
                                    rows={3}
                                />
                            </div>
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold py-2 rounded-lg transition-colors">
                                Publier la mise à jour
                            </button>
                        </form>

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-zinc-500 mb-2">Historique</h3>
                            {updates.length === 0 ? (
                                <p className="text-zinc-500 text-sm italic">Aucune mise à jour publiée.</p>
                            ) : (
                                updates.map((update) => (
                                    <div key={update.id} className="p-3 bg-zinc-800/30 rounded-lg border-l-2 border-blue-500 relative group">
                                        <div className="flex justify-between items-center mb-1 pr-6">
                                            <p className="font-medium text-zinc-200 text-sm">{update.title}</p>
                                            <span className="text-xs text-zinc-600">{new Date(update.date).toLocaleDateString()}</span>
                                        </div>
                                        <p className="text-xs text-zinc-400">{update.content}</p>
                                        <button
                                            onClick={() => deleteUpdate(update.id)}
                                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-400"
                                            title="Supprimer"
                                        >
                                            <LogOut className="w-3 h-3 rotate-180" />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
