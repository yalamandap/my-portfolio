import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Yalamanda Rao Papana</h3>
            <p className="text-gray-300 leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions 
              with a strong foundation in AI, Firebase, and modern JavaScript stacks.
            </p>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="border-gray-600 hover:border-electric-blue hover:bg-electric-blue transition-all duration-300"
                onClick={() => window.open('https://github.com/yalamandap', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="border-gray-600 hover:border-electric-blue hover:bg-electric-blue transition-all duration-300"
                onClick={() => window.open('https://www.linkedin.com/in/yalamanda-rao-papana-5309b9284', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Certifications", href: "#certifications" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-electric-blue transition-colors duration-200 text-left text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-center gap-2">
                <span>📧</span>
                yalamandap6@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <span>☎️</span>
                +91 6301932724
              </p>
              <p className="flex items-center gap-2">
                <span>📍</span>
                Martur, Andhra Pradesh
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Yalamanda Rao Papana. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

