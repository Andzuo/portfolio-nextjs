import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("#about");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center p-8"
    >
      <div className=" inset-0 bg-[radial-gradient(circle_at_center,#5900ff15,transparent_50%)]" />
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-8xl font-bold mb-8 leading-tight">
            Anderson Medeiros
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Desenvolvedor Web <br /> Full Stack
            </span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 cursor-pointer"
        >
          <Button
            onClick={handleNavigate}
            className="bg-purple-600 mt-10 cursor-pointer hover:bg-purple-700 text-lg h-12 px-8"
          >
            Iniciar Projeto
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
