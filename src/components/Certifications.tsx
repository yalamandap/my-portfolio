
const Certifications = () => {
  const certifications = [
    {
      title: "Java Basics",
      provider: "HackerRank",
      icon: "☕",
      color: "from-orange-500 to-red-500",
      verified: true,
      url: "https://drive.google.com/file/d/19KM5GOESaY7DGDOTluEgQJNdYTL2s_rp/view?usp=drive_link"
    },
    {
      title: "Python Basics",
      provider: "HackerRank",
      icon: "🐍",
      color: "from-blue-500 to-green-500",
      verified: true,
      url: "https://drive.google.com/file/d/18AV0aThN85WtVhmWz417xJLrZ8TnV25y/view?usp=drive_link"
    },
    {
      title: "SAWIT.AI",
      provider: "GUVI",
      icon: "🤖",
      color: "from-purple-500 to-pink-500",
      verified: true,
      url: "https://drive.google.com/file/d/1VrvychY966-39gC-VN_ionvCbSdihjXs/view?usp=drive_link"
    },
    {
      title: "FFE FLY Program",
      provider: "CMI",
      icon: "🚀",
      color: "from-indigo-500 to-purple-500",
      verified: true,
      url: "https://drive.google.com/file/d/1a5OpojmHiLLEO6MIU0FUOuqEzBkeLnO3/view?usp=drive_link"
    },
    {
      title: "HTML",
      provider: "Great Learning",
      icon: "🌐",
      color: "from-orange-500 to-yellow-500",
      verified: true,
      url: "https://drive.google.com/file/d/1T8YHQZl0UZ_VJVuweiXepVP1OlHhXsC6/view?usp=drive_link"
    },
    {
      title: "CSS & JavaScript",
      provider: "Infosys Springboard",
      icon: "💻",
      color: "from-blue-500 to-purple-500",
      verified: true,
      url: "https://drive.google.com/file/d/1lZZ7MGfVHvrV--ia9dbSgHRihxN9HEtW/view?usp=drive_link"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-hero-gradient mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Continuous learning and skill development through industry-recognized certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(cert.url, '_blank')}
            >
              <div className="space-y-4">
                {/* Header with icon and verification */}
                <div className="flex items-start justify-between">
                  <div className={`text-3xl p-3 rounded-lg bg-gradient-to-r ${cert.color} bg-opacity-10`}>
                    {cert.icon}
                  </div>
                  {cert.verified && (
                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                      ✓ Verified
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground">{cert.title}</h3>
                  <p className={`font-medium bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                    {cert.provider}
                  </p>
                </div>

                {/* Badge/Button */}
                <div className={`w-full py-2 px-4 rounded-lg bg-gradient-to-r ${cert.color} text-white text-center text-sm font-medium hover:shadow-lg transition-shadow`}>
                  View Certificate
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Continuous Learning</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              I believe in continuous learning and staying updated with the latest technologies. 
              These certifications represent my commitment to professional development and 
              mastering new skills in the ever-evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
