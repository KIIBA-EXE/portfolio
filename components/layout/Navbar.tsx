
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/providers/LanguageProvider";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useSession } from "next-auth/react";
import { Shield, Menu, X } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const { t } = useLanguage();
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: t.nav.home, path: "/" },
        { name: t.nav.projects, path: "/projects" },
        { name: t.nav.about, path: "#about" },
        { name: t.nav.contact, path: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-4 inset-x-0 max-w-2xl mx-auto z-50 px-4"
        >
            <div className="relative flex items-center justify-between px-6 py-3 rounded-full bg-zinc-900/50 backdrop-blur-md border border-white/10 shadow-lg shadow-black/5">
                <Link href="/" className="text-sm font-bold text-white tracking-widest uppercase">
                    Portfolio
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className="text-sm text-zinc-400 hover:text-white transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
                        </Link>
                    ))}

                    {session && (
                        <Link
                            href="/admin"
                            className="text-zinc-400 hover:text-emerald-400 transition-colors"
                            title="Admin Dashboard"
                        >
                            <Shield className="w-4 h-4" />
                        </Link>
                    )}

                    <div className="pl-4 border-l border-white/10 ml-2">
                        <LanguageSwitcher />
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <LanguageSwitcher />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-1 text-zinc-400 hover:text-white transition-colors"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        className="absolute top-full left-4 right-4 mt-2 p-4 rounded-2xl bg-zinc-900/90 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden md:hidden"
                    >
                        <div className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            {session && (
                                <Link
                                    href="/admin"
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-3 text-sm font-medium text-zinc-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-xl transition-all flex items-center gap-2"
                                >
                                    <Shield className="w-4 h-4" />
                                    Admin Dashboard
                                </Link>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
