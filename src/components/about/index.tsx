"use client";

// import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
// import { Code2, Laptop, Rocket } from "lucide-react";

// const skills = [
//   {
//     title: "Frontend Development",
//     description: "React, Next.js, TypeScript, Tailwind CSS",
//     icon: <Code2 className="w-6 h-6 text-purple-500" />,
//     image: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     title: "Backend Development",
//     description: "Node.js, Express, PostgreSQL, MongoDB",
//     icon: <Laptop className="w-6 h-6 text-purple-500" />,
//     image: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     title: "DevOps & Tools",
//     description: "Git, Docker, AWS, CI/CD",
//     icon: <Rocket className="w-6 h-6 text-purple-500" />,
//     image: "/placeholder.svg?height=400&width=600",
//   },
// ];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-8 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12  items-center mb-20"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                Mim
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Sou desenvolvedor fullStack com experiência em projetos que
              integram desenvolvimento de interfaces e arquitetura de software.
              Já atuei no back-end utilizando tecnologias como Java com Spring
              Boot, TypeScript e Node.js, além de trabalhar no front-end com
              React, Nextjs, Tailwind, shadcnUI. Tenho conhecimento em
              arquitetura de infraestrutura na nuvem e metodologias ágeis, alem
              de paixão por desafios e resolver problemas de forma criativa e
              eficiente, valorizando sempre a colaboração em equipe. Tenho
              facilidade em aprender novas tecnologias e contribuir para o
              crescimento dos projetos em que participo, seja compartilhando
              conhecimento ou adquirindo novas habilidades. Meu objetivo é somar
              à equipe e entregar soluções de alta qualidade que agreguem valor
              ao negócio.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Tailwind",
                "Java",
                "Spring",
                "C#",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-sm bg-purple-500/10 text-purple-400 border border-purple-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden"
          >
            <Image
              src="/my.jpg?height=600&width=600"
              alt="Profile"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </motion.div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-6 relative">
                  <div className="mb-6 flex items-center gap-4">
                    {skill.icon}
                    <h3 className="text-2xl font-bold">{skill.title}</h3>
                  </div>
                  <p className="text-gray-400">{skill.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
