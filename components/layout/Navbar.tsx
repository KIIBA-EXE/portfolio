"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/providers/LanguageProvider";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useSession } from "next-auth/react";
import { Shield } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const { t } = useLanguage();
    const { data: session } = useSession();

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

                <div className="flex items-center gap-6">
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
            </div>
        </motion.nav>
    );
}
