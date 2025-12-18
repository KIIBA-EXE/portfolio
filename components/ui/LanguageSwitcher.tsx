"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 text-sm font-medium">
            <button
                onClick={() => setLanguage('fr')}
                className={`transition-colors ${language === 'fr' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
                FR
            </button>
            <span className="text-zinc-700">|</span>
            <button
                onClick={() => setLanguage('en')}
                className={`transition-colors ${language === 'en' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
                EN
            </button>
        </div>
    );
}
