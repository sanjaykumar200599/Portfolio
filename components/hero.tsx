"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowRight,
  Download,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ParticleBackground from "./particle-background";

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-background"
    >
      <ParticleBackground />

      <div className="container relative z-10 px-6 py-16 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="text-left lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              <span className="text-primary">Hi, I&apos;m{" "}  N Sanjay Kumar</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg text-foreground/80 max-w-xl leading-relaxed mb-8">
              A passionate developer with expertise in Reactjs, Nextjs, Tailwind CSS, and backend technologies. Enthusiastic about building robust, scalable, and elegant full-stack applications that solve real-world problems.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-6"
          >
            <Button asChild size="lg">
              <Link href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="flex items-center"
            >
              <Link href="/resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Link>
            </Button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <Button size="icon" variant="ghost">
              <Link
                href="https://github.com/sanjaykumar200599"
                target="_blank"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="icon" variant="ghost">
              <Link
                href="https://www.linkedin.com/in/sanjay-kumar-b142992b0/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="icon" variant="ghost">
              <Link href="mailto:sanjaykumar200599@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="icon" variant="ghost">
              <Link href="tel:+9448839537" aria-label="Phone">
                <Phone className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>

       {/* Right Content - Profile Image */}
        <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:w-1/2 flex justify-center"
        >
        <div className="rounded-full overflow-hidden w-80 h-80 sm:w-96 sm:h-96 shadow-lg border-4 border-white">
            <Image
            src="/profile.jpg" // Replace with your image path
            alt="Profile picture of N Sanjay Kumar"
            width={384}
            height={384}
            className="object-cover w-full h-full"
            priority
            />
        </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
