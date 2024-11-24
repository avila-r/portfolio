import { Header } from "@/components/header/Header"
import { Hero } from "@/components/hero/Hero"
import { About } from '@/components/about/About'
import { Skills } from "@/components/skills/Skills"
import { Projects } from "@/components/projects/Projects"
import { Contact } from "@/components/contact/Contact"
import { Footer } from '@/components/footer/Footer'

import { ReactLenis } from 'lenis/react'

import { Toaster } from "@/components/ui/sonner"

export function App() {
  return (
    <ReactLenis root>
      <Header/>

        <section id="about">
          <Hero/>
          <About/>
        </section>

        <section id="skills">
          <Skills/>
        </section>

        <section id="projects">
          <Projects/>
        </section>

        <section id="contact">
          <Contact/>
        </section>

      <Footer/>
      <Toaster />
    </ReactLenis>
  );
}
