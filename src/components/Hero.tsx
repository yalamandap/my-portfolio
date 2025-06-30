import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  const resumeDriveLink = "https://drive.google.com/file/d/1WS2HakBCnRkG9jvjLkcShzlajP36z7xp/view?usp=drive_link";

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
                Yalamanda Rao Papana
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <span className="block font-medium text-foreground">Full Stack Developer</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: "0.6s" }}>
              Passionate IT student specializing in full stack web development, Generative AI, and cloud integration. I enjoy building impactful and scalable web applications.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:scale-110 transition-transform hover:border-electric-blue hover:text-electric-blue"
                onClick={() => window.open("https://github.com/yalamandap", "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:scale-110 transition-transform hover:border-electric-blue hover:text-electric-blue"
                onClick={() => window.open("https://www.linkedin.com/in/yalamanda-rao-papana-5309b9284", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:scale-110 transition-transform hover:border-electric-blue hover:text-electric-blue"
                onClick={() => window.open("https://www.hackerrank.com/profile/yalamandap6", "_blank")}
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
                    src="https://i.postimg.cc/LX9YXgSx/mypic.jpg"  // Replace with your own hosted profile image if needed
                    alt="Yalamanda Rao Papana" 
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

