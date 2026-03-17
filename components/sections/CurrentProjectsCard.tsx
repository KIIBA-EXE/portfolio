"use client";

import { useEffect, useState } from "react";
import { Smartphone, Loader2 } from "lucide-react";
import { BentoCard } from "@/components/ui/BentoGrid";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface Update {
    id: string;
    title: string;
    content: string;
    date: string;
}

export default function CurrentProjectsCard() {
    const { t } = useLanguage();
    const [updates, setUpdates] = useState<Update[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/updates")
            .then(res => res.json())
            .then(data => {
                setUpdates(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const description = loading
        ? t.bento.loading
        : updates.length > 0
            ? `${t.bento.last_update}: ${updates[0].title} - ${new Date(updates[0].date).toLocaleDateString()}`
            : t.bento.no_updates;

    return (
        <BentoCard
            title={t.bento.updates_title}
            description={description}
            header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-zinc-900 border border-white/5 p-4 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 pointer-events-none" />

                    {loading ? (
                        <div className="flex items-center justify-center h-full">
                            <Loader2 className="w-5 h-5 text-zinc-500 animate-spin" />
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {updates.length > 0 ? updates.map(update => (
                                <div key={update.id} className="text-sm border-l-2 border-emerald-500 pl-3">
                                    <p className="font-semibold text-zinc-300">{update.title}</p>
                                    <p className="text-zinc-500 text-xs line-clamp-1">{update.content}</p>
                                </div>
                            )) : (
                                <p className="text-zinc-500 text-sm italic">{t.bento.no_updates}</p>
                            )}
                        </div>
                    )}
                </div>
            }
            icon={<Smartphone className="w-4 h-4 text-zinc-500" />}
            className="md:col-span-2"
        />
    );
}
