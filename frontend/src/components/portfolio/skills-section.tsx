import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Settings, CreditCard, Cloud, Shield } from "lucide-react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const experiencedSkills = [
    { name: "Python", icon: "🐍" },
    { name: "FastAPI", icon: "🚀" },
    { name: "PostgreSQL", icon: "🗄️" },
    { name: "JavaScript", icon: "📝" },
    { name: "ReactJS", icon: "⚛️" },
    { name: "HTML5", icon: "🏗️" },
    { name: "CSS3", icon: "🎨" },
    { name: "ORM", icon: "🔗" },
  ];

  const familiarSkills = [
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Terraform", icon: "🏗️" },
    { name: "Kubernetes", icon: "⚙️" },
    { name: "Grafana", icon: "📊" },
    { name: "TypeScript", icon: "📘" },
    { name: "Serverless", icon: "⚡" },
    { name: "GitLab CI/CD", icon: "🔄" },
  ];

  const specializations = [
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Payment Systems",
      description: "ACH APIs, transaction processing, fraud prevention, and compliance",
      color: "from-blue-50 to-cyan-50",
      iconColor: "text-blue-600"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Architecture",
      description: "Microservices, serverless computing, and infrastructure as code",
      color: "from-emerald-50 to-teal-50",
      iconColor: "text-emerald-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Compliance",
      description: "PCI compliance, OFAC screening, and secure data handling",
      color: "from-purple-50 to-pink-50",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <p className="text-lg text-slate-600">Technologies I use to build scalable fintech solutions</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experienced Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Star className="text-yellow-500 mr-2 h-6 w-6" />
              Experienced
            </h3>
            <div className="flex flex-wrap gap-3">
              {experiencedSkills.map((skill, index) => (
                <Badge 
                  key={index}
                  className="skill-badge bg-blue-100 text-blue-700 px-4 py-2 hover:scale-105 transition-transform"
                >
                  <span className="mr-2">{skill.icon}</span>
                  {skill.name}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Familiar Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Settings className="text-slate-500 mr-2 h-6 w-6" />
              Familiar
            </h3>
            <div className="flex flex-wrap gap-3">
              {familiarSkills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="skill-badge bg-slate-100 text-slate-700 px-4 py-2 hover:scale-105 transition-transform"
                >
                  <span className="mr-2">{skill.icon}</span>
                  {skill.name}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Specializations */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Specializations</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <Card key={index} className={`card-hover bg-gradient-to-br ${spec.color}`}>
                <CardContent className="text-center p-8">
                  <div className={`${spec.iconColor} mb-4 flex justify-center`}>
                    {spec.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{spec.title}</h4>
                  <p className="text-slate-600">{spec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
