import { NavBar } from "@/app/components/NavBar";
import { Hero } from "@/app/components/Hero";
import { Values } from "@/app/components/Values";
import { Projects } from "@/app/components/Projects";
import { TechStack } from "@/app/components/TechStack";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFDFB]">
      <NavBar />
      <Hero />
      <Values/>
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}