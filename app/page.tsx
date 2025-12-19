"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import { BentoGrid, BentoCard } from "@/components/ui/BentoGrid";
import { TechMarquee } from "@/components/ui/Marquee";
import { SiNextdotjs, SiReact, SiPhp, SiSymfony, SiMysql, SiJavascript, SiLinux, SiGithub, SiTypescript, SiDocker, SiTailwindcss, SiNodedotjs, SiGit, SiFigma } from "react-icons/si";
import { Code, Terminal, Smartphone } from "lucide-react";
import CurrentProjectsCard from "@/components/sections/CurrentProjectsCard";
import Contact from "@/components/sections/Contact";
import Services from "@/components/sections/Services";
import Timeline from "@/components/sections/Timeline";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="relative z-10 min-h-screen w-full overflow-x-hidden text-foreground pb-20">
      <Hero />

      <Services />

      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10" id="projects">
        <BentoGrid className="max-w-4xl mx-auto">
          <BentoCard
            title={t.bento.github_title}
            description={t.bento.github_desc}
            header={
              <div className="relative w-full h-full min-h-[6rem] rounded-xl overflow-hidden border border-white/10 group-hover/bento:border-white/20 transition-colors">
                <div className="absolute inset-0 bg-[url('/images/github_card_bg.png')] bg-cover bg-center opacity-60 group-hover/bento:opacity-80 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
            }
            icon={<SiGithub className="w-4 h-4 text-zinc-500" />}
            link="/projects"
            className="md:col-span-2"
          />

          <BentoCard
            title={t.bento.tech_title}
            description={t.bento.tech_desc}
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-zinc-900/50 backdrop-blur-sm p-4 gap-2 flex-col justify-center overflow-hidden border border-white/5">
                <TechMarquee
                  className="py-2"
                  items={[
                    <SiPhp key="php" className="w-8 h-8 text-[#777BB4] mx-2" />,
                    <SiSymfony key="symfony" className="w-8 h-8 text-white mx-2" />,
                    <SiMysql key="mysql" className="w-8 h-8 text-[#4479A1] mx-2" />,
                    <SiJavascript key="js" className="w-8 h-8 text-[#F7DF1E] mx-2" />,
                    <SiReact key="react" className="w-8 h-8 text-[#61DAFB] mx-2" />,
                    <SiNextdotjs key="next" className="w-8 h-8 text-white mx-2" />,
                    <SiLinux key="linux" className="w-8 h-8 text-[#FCC624] mx-2" />,
                    <SiTypescript key="ts" className="w-8 h-8 text-[#3178C6] mx-2" />,
                    <SiTailwindcss key="tailwind" className="w-8 h-8 text-[#38B2AC] mx-2" />,
                    <SiDocker key="docker" className="w-8 h-8 text-[#2496ED] mx-2" />,
                    <SiNodedotjs key="node" className="w-8 h-8 text-[#339933] mx-2" />,
                    <SiGit key="git" className="w-8 h-8 text-[#F05032] mx-2" />,
                    <SiFigma key="figma" className="w-8 h-8 text-[#F24E1E] mx-2" />,
                  ]}
                />
              </div>
            }
            icon={<Code className="w-4 h-4 text-zinc-500" />}
            className="md:col-span-1"
          />

          <BentoCard
            title={t.bento.exp_title}
            description={t.bento.exp_desc}
            header={
              <div className="relative w-full h-full min-h-[6rem] rounded-xl overflow-hidden border border-white/10 group-hover/bento:border-white/20 transition-colors">
                <div className="absolute inset-0 bg-[url('/images/dans_les_bottes_bg.png')] bg-cover bg-center opacity-70 group-hover/bento:opacity-90 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
            }
            icon={<Terminal className="w-4 h-4 text-zinc-500" />}
            link="/experience/dans-les-bottes"
            className="md:col-span-1"
          />

          <CurrentProjectsCard />

        </BentoGrid>
      </section>

      <Timeline />

      <About />

      <Contact />

    </main>
  );
}
