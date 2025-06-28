import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  const resumeDriveLink = "https://drive.google.com/file/d/1qdz127USo58hWq-EwcqPB7pDYVWR8YLU/view?usp=sharing";

  const handleDownloadResume = () => {
    window.open(resumeDriveLink, "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-electric-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-deep-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-1s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground animate-fade-in">Hi, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold gradient-text animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Sahithya Lakku
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <span className="block">SDE Intern @Amazon</span>
                <span className="block font-medium text-foreground">Full Stack Developer</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: "0.6s" }}>
              Passionate Computer Science student with hands-on experience in scalable system development, 
              React.js, Java, and databases. I enjoy building things that live on the web.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:scale-110 transition-transform hover:border-electric-blue hover:text-electric-blue"
                onClick={() => window.open("https://github.com/sahithya-lakku", "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:scale-110 transition-transform hover:border-electric-blue hover:text-electric-blue"
                onClick={() => window.open("https://www.linkedin.com/in/lakku-sahithya-023802248", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:scale-110 transition-transform hover:border-electric-blue hover:text-electric-blue"
                onClick={() => window.open("https://www.hackerrank.com/profile/sahithyalakku", "_blank")}
              >
                <span className="text-sm font-bold">HR</span>
              </Button>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-in" style={{ animationDelay: "1s" }}>
              <Button 
                onClick={handleDownloadResume}
                className="bg-hero-gradient hover:shadow-lg hover:shadow-electric-blue/25 transition-all duration-300 text-white px-8 py-3 text-lg"
              >
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-hero-gradient p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/FFxTfjN7/sahiiii.jpg" 
                    alt="Sahithya Lakku" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-electric-blue rounded-full animate-pulse-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-deep-purple rounded-full animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
