"use client";

import { cn } from "@/utils/cn";
import Spotlight from "./Spotlight";
import { ArrowUpRight } from "lucide-react";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

import TiltWrapper from "./TiltWrapper";

export const BentoCard = ({
    className,
    title,
    description,
    header,
    icon,
    link,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    link?: string;
}) => {
    return (
        <TiltWrapper className={cn("row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input border border-white/10 p-0", className)}>
            <Spotlight
                className="h-full w-full bg-black justify-between flex flex-col space-y-4 p-4 rounded-xl"
            >
                {header}
                <div className="group-hover/bento:translate-x-2 transition duration-200">
                    <div className="flex items-center gap-2 mb-2 font-sans font-bold text-neutral-200">
                        {icon}
                        {title}
                    </div>
                    <div className="font-sans font-normal text-neutral-400 text-xs">
                        {description}
                    </div>

                    {link && (
                        <a href={link} className="flex items-center gap-1 mt-4 text-sm text-neutral-400 hover:text-white transition-colors">
                            View Project <ArrowUpRight className="w-3 h-3" />
                        </a>
                    )}
                </div>
            </Spotlight>
        </TiltWrapper>
    );
};
