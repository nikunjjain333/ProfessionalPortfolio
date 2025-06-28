import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Download, Trophy, Book, FileText } from "lucide-react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Virtual Labs Simulator",
      description: "Built a comprehensive simulator for Physical Pharmaceutics experiments, enabling students to experience laboratory work virtually. Won Gold Developer Certificate at eBootathon 01.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      technologies: ["HTML5", "CSS3", "TypeScript"],
      status: "Award Winner",
      statusIcon: <Trophy className="mr-1 h-4 w-4" />,
      statusColor: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "Research Publications",
      description: "Authored and published research papers on CPU scheduling algorithms and home security using machine learning. Presented at ECBI-2020 conference.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      technologies: ["Research", "Machine Learning", "Academic Writing"],
      status: "Published",
      statusIcon: <Book className="mr-1 h-4 w-4" />,
      statusColor: "bg-blue-100 text-blue-800",
      papers: [
        '"A Study of CPU Scheduling Algorithms" - IJCRET',
        '"Home Security Using Machine Learning"'
      ]
    }
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "Gold Developer Certificate",
      description: "eBootathon 01 - TEQIP III & IIT Kanpur"
    },
    {
      icon: "🎖️",
      title: "Certificate of Merit",
      description: "AKTU Semester I Examination (2018-2019)"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600">Innovative solutions and research contributions</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover" 
                />
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                    <Badge className={project.statusColor}>
                      {project.statusIcon}
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  
                  {project.papers && (
                    <div className="space-y-2 mb-4">
                      {project.papers.map((paper, paperIndex) => (
                        <div key={paperIndex} className="text-sm text-slate-600 flex items-center">
                          <FileText className="mr-2 h-4 w-4" />
                          {paper}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-slate-100 text-slate-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.title === "Virtual Labs Simulator" && (
                      <>
                        <Button variant="outline" size="sm">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </>
                    )}
                    {project.title === "Research Publications" && (
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download Papers
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Awards & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-2xl">{achievement.icon}</div>
                <div>
                  <h4 className="font-bold mb-1">{achievement.title}</h4>
                  <p className="text-blue-100">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
