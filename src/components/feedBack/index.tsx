import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FeedBacks = () => {
  const feedbacks = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    image: "/placeholder.svg?height=64&width=64",
    alt: `User ${i + 1}`,
  }));

  const animationVariants = {
    animate: {
      x: [0, -1000], // Ajuste o valor para corresponder ao comprimento total da lista
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // Tempo para o ciclo completo
          ease: "linear",
        },
      },
    },
  };

  return (
    <section id="feedBack" className="py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Squads que marcaram minha jornada
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              e o que disseram sobre mim
            </span>
          </h2>
        </motion.div>
        <div className="overflow-hidden relative">
          <motion.div
            className="flex space-x-8"
            variants={animationVariants}
            animate="animate"
          >
            {feedbacks.map((feedback) => (
              <div
                key={feedback.id}
                className="w-24 h-24 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex-shrink-0"
              >
                <Image
                  src={feedback.image}
                  alt={feedback.alt}
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                />
              </div>
            ))}
            {feedbacks.map((feedback) => (
              <div
                key={`duplicate-${feedback.id}`}
                className="w-24 h-24 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex-shrink-0"
              >
                <Image
                  src={feedback.image}
                  alt={feedback.alt}
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeedBacks;
