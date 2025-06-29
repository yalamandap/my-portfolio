import { Button } from "@/components/ui/button";

const Resume = () => {
  const resumeDriveLink = "https://drive.google.com/file/d/1WS2HakBCnRkG9jvjLkcShzlajP36z7xp/view?usp=drive_link";

  const handleViewResume = () => {
    window.open(resumeDriveLink, "_blank");
  };

  const handleDownloadResume = () => {
    window.open(resumeDriveLink, "_blank");
  };

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Resume</h2>
          <div className="w-20 h-1 bg-hero-gradient mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 border border-blue-100 text-center">
            <div className="space-y-6">
              {/* Resume preview placeholder */}
              <div className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-2xl border border-gray-200">
                <div className="space-y-4">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Yalamanda Rao Papana</h3>
                    <p className="text-electric-blue font-medium">Full Stack Developer | Generative AI Trainee @Intel Unnati</p>
                    <p className="text-muted-foreground text-sm">
                      yalamandap6@gmail.com | +91 6301932724 | Martur, Andhra Pradesh
                    </p>
                  </div>

                  <div className="h-px bg-gray-200 my-4"></div>

                  <div className="text-left space-y-3 text-sm">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">EDUCATION</h4>
                      <p className="text-muted-foreground">
                        <strong>B.Tech in Information Technology</strong> - Narasaraopeta Engineering College (Expected 2026)<br />
                        Current Student
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">EXPERIENCE</h4>
                      <p className="text-muted-foreground">
                        <strong>Intel Unnati Generative AI Program</strong> (Mar 2025 - May 2025)<br />
                        Industrial training focused on NLP, transformers, and generative AI models.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">TECHNICAL SKILLS</h4>
                      <p className="text-muted-foreground">
                        Languages: Python, Java, JavaScript, SQL, C++<br />
                        Frontend: React.js, HTML, CSS, Next.js<br />
                        Backend: Node.js, Express<br />
                        Database: Firebase Firestore, MySQL<br />
                        Tools: Git, GitHub, VS Code, Postman, Colab
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleViewResume}
                  variant="outline"
                  size="lg"
                  className="hover:bg-electric-blue hover:text-white hover:border-electric-blue transition-all duration-300"
                >
                  👁️ View Resume
                </Button>
                <Button
                  onClick={handleDownloadResume}
                  size="lg"
                  className="bg-hero-gradient hover:shadow-lg hover:shadow-electric-blue/25 transition-all duration-300 text-white"
                >
                  📄 Download PDF
                </Button>
              </div>

              <p className="text-muted-foreground text-sm">
                Updated regularly with latest projects and achievements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
