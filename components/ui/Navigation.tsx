"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const Navigation = () => {
    return (
        <div className="fixed top-6 w-full flex justify-center z-50 px-4">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-3xl bg-[#030014]/50 backdrop-blur-xl border border-[#7042f8]/30 rounded-full px-8 py-4 flex items-center justify-between shadow-lg shadow-[#2A0E61]/20"
            >
                <a href="#" className="flex items-center gap-2 group">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                        kiiba.dev
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-5">
                    <Github className="w-5 h-5 text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all cursor-pointer" />
                    <Twitter className="w-5 h-5 text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all cursor-pointer" />
                    <Linkedin className="w-5 h-5 text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all cursor-pointer" />
                </div>
            </motion.div>
        </div>
    );
};

export default Navigation;
