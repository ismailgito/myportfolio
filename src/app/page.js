// src/app/page.js

import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import MarketingCasestudies from "@/components/MarketingCasestudies";
import Projects from "@/components/Projects";
import Internships from "@/components/Internships";
import Certificates from "@/components/Certificates";
import Testimonials from "@/components/Testimonials";
import Resume from "@/components/Resume";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24 bg-bg text-apptext relative">

      {/* 1. HERO */}
      <Hero />

      {/* 2. CASE STUDIES */}
      <MarketingCasestudies />

      {/* 3. SERVICES (Toolkit) */}
      <Skills />

      {/* 4. PROJECTS */}
      <Projects />

      {/* 5. EXPERIENCE */}
      <Internships />

      {/* 6. CREDENTIALS */}
      <Certificates />

      {/* 7. ABOUT */}
      <AboutMe />

      {/* 8. TESTIMONIALS */}
      <Testimonials />

      {/* 9. RESUME CTA */}
      <Resume />

      {/* 10. CONTACT CTA */}
      <ContactForm />
    </div>
  );
}
