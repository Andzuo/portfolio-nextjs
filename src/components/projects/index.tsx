import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { Card } from "../ui/card";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Sistema de Gestão",
      description:
        "Um sistema completo para gestão de equipes e recursos, com integração em tempo real e interface amigável.",
      // image: "/project1.jpg",
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
      comingSoon: true,
    },
    {
      title: "E-commerce Personalizado",
      description:
        "Uma plataforma de e-commerce com recursos avançados de personalização e inteligência artificial para recomendação de produtos.",
      // image: "/project2.jpg",
      technologies: ["Vue.js", "Nuxt.js", "Firebase", "Stripe"],
      comingSoon: true, // Este projeto ainda será lançado
    },
    {
      title: "Aplicativo de Delivery",
      description:
        "Uma solução moderna para serviços de entrega, com rastreamento ao vivo e suporte a múltiplos idiomas.",
      // image: "/project3.jpg",
      technologies: ["React Native", "Expo", "GraphQL", "AWS"],
      comingSoon: true,
    },
  ];

  return (
    <section id="projects" className="py-32 px-8 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#5900ff15,transparent_50%)]" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold">
            Meus Projetos
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Conheça meu portfólio
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="relative bg-black/40 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
                {project.comingSoon && (
                  <div className="absolute top-4 z-50 right-4">
                    <Badge className="bg-yellow-500 text-black border-none">
                      Coming Soon
                    </Badge>
                  </div>
                )}
                <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src={"/placeholder.jpg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      className="bg-purple-600 text-white border-none"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
