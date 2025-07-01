import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const AboutSection = () => {
  const stats = [
    { value: "27+", label: "U.S. States Supported" },
    { value: "3+", label: "Years Experience" },
    { value: "2", label: "Research Papers" },
    { value: "5+", label: "Certifications" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Driven by curiosity and logical thinking, I build scalable fintech systems that solve real-world challenges
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">My Journey in Fintech</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Currently working as a <strong>Software Development Engineer II (SDE-II)</strong> at Treez (TreezPay), 
                where I build and maintain robust ACH payment systems tailored for high-risk industries. 
                I'm part of an engineering team delivering secure, scalable, and compliant fintech APIs 
                that serve cannabis-related businesses across the U.S.
              </p>
              <p>
                My expertise spans the full stack - from architecting backend microservices with Python and FastAPI 
                to building modern user interfaces with React and TypeScript. I leverage infrastructure-as-code 
                tools like Terraform and AWS to ensure our solutions are performant and production-ready.
              </p>
              <p>
                Prior to Treez, I contributed at Swifter, known as the "Stripe for Cannabis," working on 
                both in-store and online ACH payment integrations. This experience deepened my understanding 
                of compliance requirements and fraud prevention in high-risk payment processing.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="card-hover bg-slate-50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
