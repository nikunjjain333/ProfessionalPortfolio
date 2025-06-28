import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "Software Development Engineer (SDE-II)",
      company: "Treez Inc. (TreezPay)",
      period: "Aug 2024 - Present",
      location: "Bangalore, Karnataka, India",
      color: "bg-blue-600",
      achievements: [
        "Spearheading development of core ACH payment APIs powering cannabis fintech infrastructure across 27+ U.S. states",
        "Migrated platform components from monolithic to scalable microservices using FastAPI",
        "Built robust retry, write-off, and fallback mechanisms for transaction recovery"
      ]
    },
    {
      title: "Software Development Engineer (SDE-I)",
      company: "Treez Inc. (TreezPay)",
      period: "Sep 2022 - Aug 2024",
      location: "Bangalore, Karnataka, India",
      color: "bg-blue-500",
      achievements: [
        "Led implementation of email-based KYB authentication workflows",
        "Designed and maintained scalable backend services with PostgreSQL and AWS",
        "Ensured PCI-compliant data flows with observability tools like Grafana"
      ]
    },
    {
      title: "Software Engineer",
      company: "Swifter",
      period: "Dec 2021 - Sep 2022",
      location: "Bangalore, Karnataka, India",
      color: "bg-cyan-500",
      achievements: [
        "Developed ACH-based payment APIs for high-risk cannabis merchants",
        "Built dashboard UI using React.js for merchant onboarding workflows",
        "Engineered OFAC data processing for KYC verification and fraud prevention"
      ]
    },
    {
      title: "Flutter Android Developer Intern",
      company: "GlobalFair",
      period: "Jul 2021 - Oct 2021",
      location: "Gurugram, Haryana, India",
      color: "bg-emerald-500",
      achievements: [
        "Designed Image Sharing App with real-time chat functionality",
        "Integrated Firebase for authentication and cloud messaging"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-slate-600">Building the future of fintech, one API at a time</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
          
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              <div className={`absolute left-6 w-4 h-4 ${experience.color} rounded-full border-4 border-white shadow-md hidden md:block`}></div>
              <div className="md:ml-20">
                <Card className="card-hover">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{experience.title}</h3>
                        <h4 className="text-lg font-semibold text-blue-600">{experience.company}</h4>
                      </div>
                      <Badge variant="outline" className="mt-2 lg:mt-0">
                        <Calendar className="mr-2 h-4 w-4" />
                        {experience.period}
                      </Badge>
                    </div>
                    <div className="text-slate-600 mb-4 flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      {experience.location}
                    </div>
                    <ul className="space-y-3 text-slate-600">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <CheckCircle className="text-green-500 mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
