import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Education } from '@/components/sections/Education';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Blogs } from '@/components/sections/Blogs';
import { YouTube } from '@/components/sections/YouTube';
import { Achievements } from '@/components/sections/Achievements';
import { Volunteering } from '@/components/sections/Volunteering';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for the entire document
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-background">
      <Navigation />

      <main>
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Blogs />
        <YouTube />
        <Achievements />
        <Volunteering />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
