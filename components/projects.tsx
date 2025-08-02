"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Ghibli Art Generator",
    description:
      "Transform photos or text into Studio Ghibli-style artwork using a custom AI model with a React frontend and Spring Boot backend.",
    github: "https://github.com/sanjaykumar200599/pixelscribe-ai",
    demo: "https://pixelscribe-ai.vercel.app",
    image: "/projects/ghibli.png",
  },
  {
    title: "Crypto Crash Game",
    description:
      "A real-time multiplayer crypto prediction game with WebSocket integration and CoinGecko API for live price feeds.",
    github: "https://github.com/sanjaykumar200599/Crypto-crash-backend",
    demo: "",
    image: "/projects/crypto.png",
  },
  {
    title: "Arecanut Disease Classifier",
    description:
      "Machine Learning-based web app to detect and classify diseases in Arecanut plants using CNN and OpenCV.",
    github: "https://github.com/sanjaykumar200599/Arecanut-Leaf-Disease",
    demo: "",
    image: "/projects/arecanut.png",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal developer portfolio built with Next.js, Tailwind CSS, and TypeScript showcasing projects and skills.",
    github: "https://github.com/sanjaykumar200599/portfolio",
    demo: "https://sanjaykumar.dev",
    image: "/projects/portfolio.png",
  },
];

export default function Projects() {
  return (
    <section className="py-16 px-4 md:px-12 w-full bg-muted/30" id="projects">
      <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-10">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-[#111827] text-gray-300 rounded-xl shadow-md border border-gray-800 hover:border-cyan-400 transition-all duration-300">
              <CardContent className="p-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="rounded-md object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-xl hover:text-cyan-400" />
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink className="text-xl hover:text-cyan-400" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
