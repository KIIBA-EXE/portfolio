import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full py-12 px-4 border-t border-white/10 bg-black mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col gap-2">
                    <span className="text-xl font-bold tracking-tight text-white">
                        Mathieu Mistretta<span className="text-zinc-600">.</span>
                    </span>
                    <p className="text-zinc-500 text-sm">
                        © {new Date().getFullYear()} Tous droits réservés.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/KIIBA-EXE" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/mathieu-mistretta-31300a187/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/mathieu_miss/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
