"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Snap AI ",
    description:
      "Snap AI is an AI-powered image editor inspired by Lightroom, built using Next.js, Js, Fabric.js, Image.io, and Unsplash AI. It offers users advanced editing tools like background removal.",
    github: "https://github.com/sanjaykumar200599/SnapAI",
    demo: "https://snap-ai-image-editor.vercel.app/",
    image: "/snapai.png",
  },
  {
    title: "Crypto Crash Game",
    description:
      "A real-time multiplayer backend for a Crypto Crash betting game built with Node.js, Express, WebSocket, MongoDB, and Binance Api.",
    github: "https://github.com/sanjaykumar200599/Crypto_crash_game",
    demo: "https://crypto-crash-backend.vercel.app/",
    image: "/crashgame.png",
  },
  {
    title: "Career Cart",
    description:
      "Careercart is a modern, AI-powered platform that helps job seekers build professional resumes, create tailored CVs, and prepare for interviews with curated mock questions.",
    github: "https://github.com/sanjaykumar200599/Careercart",
    demo: "https://ai-career-coach-sage.vercel.app/",
    image: "/resume.png",
  },
  {
    title: "Pixel Scribe",
    description:
      "PixelScribe is an AI-powered web application that transforms natural language text into visually rich images using advanced text-to-image generation models which is built with Spring Boot.",
    github: "https://github.com/sanjaykumar200599/Pixelscribe",
    demo: "https://pixelscribe-frontend.vercel.app/",
    image: "/creatify.png",
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
                  <div className="w-full h-[200px] mb-4 overflow-hidden rounded-md">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
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
