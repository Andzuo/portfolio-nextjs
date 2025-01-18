"use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Github, Twitch, Twitter } from "lucide-react";
// import Image from "next/image";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about";
import ProjectsSection from "@/components/projects";
import FeedBacks from "@/components/feedBack";

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="relative">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <FeedBacks />
        {/* <footer className="py-12 px-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitch className="h-6 w-6" />
              </Button>
            </div>
            <p className="text-gray-400">
              © 2024 Seu Nome. Todos os direitos reservados.
            </p>
          </div>
        </footer> */}
      </div>
    </div>
  );
}
