"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { translations, Language } from "@/lib/translations";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations.fr;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("fr");

    useEffect(() => {
        // Optional: Detect browser language or load from localStorage
        const saved = localStorage.getItem("language") as Language;
        if (saved && (saved === "fr" || saved === "en")) {
            setLanguage(saved);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
