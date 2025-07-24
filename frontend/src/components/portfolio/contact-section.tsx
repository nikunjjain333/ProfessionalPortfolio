import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // EmailJS configuration - you'll need to replace these with your actual IDs
      const serviceId = 'service_8ykhoig'; // Replace with your EmailJS service ID
      const templateId = 'template_72sours'; // Replace with your EmailJS template ID  
      const publicKey = 'YlzrlvpuCOTozVk_U'; // Replace with your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'nikunjjain333@gmail.com', // Your email address
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly at nikunjjain333@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="text-white h-5 w-5" />,
      title: "Email",
      value: "nikunjjain333@gmail.com",
      link: "mailto:nikunjjain333@gmail.com"
    },
    {
      icon: <Phone className="text-white h-5 w-5" />,
      title: "Phone", 
      value: "+91 9557490550",
      link: "tel:+919557490550"
    },
    {
      icon: <MapPin className="text-white h-5 w-5" />,
      title: "Location",
      value: "Saharanpur, Uttar Pradesh, India"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="text-xl" />,
      href: "https://github.com/nikunjjain333",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="text-xl" />,
      href: "https://linkedin.com/in/nikunjjain333", 
      label: "LinkedIn"
    },
    {
      icon: <Mail className="text-xl" />,
      href: "mailto:nikunjjain333@gmail.com",
      label: "Email"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-lg text-slate-300">Ready to build the next generation of fintech solutions together?</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-slate-300 hover:text-white transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 p-3 rounded-lg text-slate-300 hover:text-white hover:bg-blue-600 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label className="block text-slate-300 font-medium mb-2">Name</Label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <Label className="block text-slate-300 font-medium mb-2">Email</Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <Label className="block text-slate-300 font-medium mb-2">Subject</Label>
                <Input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  placeholder="Project Collaboration"
                />
              </div>
              
              <div>
                <Label className="block text-slate-300 font-medium mb-2">Message</Label>
                <Textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
