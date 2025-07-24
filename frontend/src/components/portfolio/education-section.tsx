import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const coursework = [
    "OOP",
    "DBMS", 
    "Web Development",
    "Data Structures",
    "Algorithms"
  ];

  const certifications = [
    {
      name: "Python (Basics)",
      description: "Programming Fundamentals",
      icon: "🐍",
      color: "text-yellow-500"
    },
    {
      name: "Introduction to Cybersecurity",
      description: "Security Fundamentals", 
      icon: "🛡️",
      color: "text-red-500"
    },
    {
      name: "Architecting with Google Compute Engine",
      description: "Cloud Infrastructure",
      icon: "☁️",
      color: "text-blue-500"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Education & Certifications</h2>
          <p className="text-lg text-slate-600">Academic foundation and continuous learning</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <GraduationCap className="text-blue-600 mr-2 h-6 w-6" />
              Education
            </h3>
            <Card className="bg-slate-50">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-2">Bachelor of Technology</h4>
                <p className="text-blue-600 font-semibold mb-2">Information Technology</p>
                <p className="text-slate-600 mb-2">Meerut Institute of Engineering & Technology (MIET)</p>
                <p className="text-slate-500">2018 - 2022 | Meerut, UP</p>
                
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <h5 className="font-semibold text-slate-900 mb-3">Key Coursework</h5>
                  <div className="flex flex-wrap gap-2">
                    {coursework.map((course, index) => (
                      <Badge key={index} variant="outline" className="bg-white text-slate-700">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Award className="text-blue-600 mr-2 h-6 w-6" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-slate-50 hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-slate-900">{cert.name}</h4>
                        <p className="text-slate-600 text-sm">{cert.description}</p>
                      </div>
                      <span className="text-2xl">{cert.icon}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
