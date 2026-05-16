// PORTFOLIO/myportfolio/src/app/page.js

import Hero from "@/components/Hero";
import Resume from "@/components/Resume";
import ContactForm from "@/components/ContactForm";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Internships from "@/components/Internships";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* HERO SECTION */}
      <Hero />

      {/*ABOUT SECTION */}
      <AboutMe />

      {/* SKILLS SECTION */}
      <Skills />

      {/* CERTIFICATES SECTION */}
      <Certificates />

      {/* PROJECTS SECTION */}
      <Projects />

      {/*INTERNSHIPS SECTION */}
      <Internships />

      {/* RESUME SECTION */}
      <Resume />

      {/* CONTACT SECTION */}
      <ContactForm />
    </div>
  );
}