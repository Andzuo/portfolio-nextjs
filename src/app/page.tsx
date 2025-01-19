"use client";

import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about";
import ProjectsSection from "@/components/projects";
import FeedBacks from "@/components/feedBack";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="relative">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <FeedBacks />
        <Footer />
      </div>
    </div>
  );
}
