import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCaseStudy from './components/FeaturedCaseStudy';
import ProjectsGrid from './components/ProjectsGrid';
import ExperienceEducation from './components/ExperienceEducation';
import SkillsSection from './components/SkillsSection';
import ContactFooter from './components/ContactFooter';
import PRDModal from './components/PRDModal';

export default function App() {
  const [activePRDId, setActivePRDId] = useState(null);

  const handleOpenPRD = (prdId) => {
    setActivePRDId(prdId);
  };

  const handleClosePRD = () => {
    setActivePRDId(null);
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <FeaturedCaseStudy onOpenPRD={handleOpenPRD} />
        <ProjectsGrid onOpenPRD={handleOpenPRD} />
        <ExperienceEducation />
        <SkillsSection />
      </main>

      <ContactFooter />

      {activePRDId && (
        <PRDModal prdId={activePRDId} onClose={handleClosePRD} />
      )}
    </div>
  );
}
