
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Bank Management System",
      description: "A comprehensive CLI application built with Java and MySQL for managing bank accounts, processing transactions, and maintaining customer records.",
      tech: ["Java", "MySQL", "CLI"],
      features: ["Account Creation", "Transaction Management", "Balance Inquiry", "Customer Records"],
      githubUrl: "https://github.com/sahithya-lakku/Bank-Management-System",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Snake Game (Java Swing)",
      description: "Interactive Java-based snake game featuring smooth gameplay, live scoring system, and intuitive controls built with Swing framework.",
      tech: ["Java", "Swing", "GUI"],
      features: ["Real-time Scoring", "Smooth Gameplay", "Collision Detection", "Game State Management"],
      githubUrl: "https://github.com/sahithya-lakku/Snake_Game_Project",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Arduino Footstep Power Generator",
      description: "Innovative hardware-software solution that converts mechanical pressure from footsteps into electrical energy using Arduino microcontroller.",
      tech: ["Arduino", "C++", "Hardware"],
      features: ["Pressure Sensing", "Energy Conversion", "Real-time Monitoring", "Sustainable Technology"],
      githubUrl: "https://github.com/sahithya-lakku",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-hero-gradient mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className={`bg-gradient-to-r ${project.color} text-white px-2 py-1 rounded text-xs font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Key Features:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-electric-blue rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* GitHub button */}
                <div className="pt-4 border-t border-gray-100">
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-electric-blue hover:text-white hover:border-electric-blue transition-all duration-300"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More projects CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-hero-gradient hover:text-white hover:border-transparent transition-all duration-300"
            onClick={() => window.open('https://github.com/sahithya-lakku', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
