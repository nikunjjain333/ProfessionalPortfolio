import Navigation from "@/components/portfolio/navigation";
import HeroSection from "@/components/portfolio/hero-section";
import AboutSection from "@/components/portfolio/about-section";
import ExperienceTimeline from "@/components/portfolio/experience-timeline";
import SkillsSection from "@/components/portfolio/skills-section";
import ProjectsSection from "@/components/portfolio/projects-section";
import EducationSection from "@/components/portfolio/education-section";
import ContactSection from "@/components/portfolio/contact-section";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceTimeline />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0">
              © 2024 Nikunj Jain. All rights reserved.
            </div>
            <div className="text-slate-400 text-sm">
              Built with ❤️ using modern web technologies
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
