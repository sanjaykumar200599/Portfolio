import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import HeroSection from "@/components/hero"
import Skills from "@/components/skills"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <Education />
      <Projects />
      <Skills/>
      <Contact />
    </main>
  )
}