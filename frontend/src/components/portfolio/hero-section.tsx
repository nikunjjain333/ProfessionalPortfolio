import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";

const HeroSection = () => {
  const handleDownloadResume = () => {
    // Create download link for static PDF file
    const link = document.createElement('a');
    link.href = '/nikunjjain.pdf';
    link.download = 'Nikunj_Jain_Resume.pdf';
    link.target = '_blank';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGetInTouch = () => {
    scrollToSection('contact');
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="animate-fade-in-up"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Hi, I'm <span className="gradient-text">Nikunj Jain</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-slate-600 mb-6">
              Software Development Engineer (SDE-II) specializing in{" "}
              <span className="text-blue-600 font-semibold">Fintech & Payment Systems</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Building scalable ACH payment APIs and secure fintech infrastructure at Treez. 
              Passionate about creating robust, compliant systems that power high-risk payment processing 
              across 27+ U.S. states in the cannabis industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleDownloadResume}
                className="bg-blue-600 text-white px-8 py-3 hover:bg-blue-700"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button 
                variant="outline"
                onClick={handleGetInTouch}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 hover:bg-blue-600 hover:text-white"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
            <div className="flex space-x-6 mt-8">
              <a 
                href="https://github.com/nikunjjain333" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-600 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/nikunjjain333" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:nikunjjain333@gmail.com"
                className="text-slate-500 hover:text-blue-600 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="animate-slide-in-right"
          >
            <img 
              src="/profile-photo.jpg" 
              alt="Nikunj Jain - Professional Portrait" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover h-[600px]" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
