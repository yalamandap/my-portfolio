const Certifications = () => {
  const certifications = [
    {
      title: "Software Engineer",
      provider: "HackerRank",
      icon: "💼",
      color: "from-green-500 to-emerald-500",
      verified: true,
      url: "https://www.hackerrank.com/certificates/iframe/14f5c2b29682"
    },
    {
      title: "Intel Unnati Industrial Training",
      provider: "Intel",
      icon: "🧠",
      color: "from-blue-600 to-indigo-600",
      verified: true,
      url: "https://drive.google.com/drive/folders/10irM3SxNSOCqmPHWc63ErCQ1R2lG_cHt"
    },
    {
      title: "Basics of Python",
      provider: "Infosys Springboard",
      icon: "🐍",
      color: "from-yellow-500 to-orange-500",
      verified: true,
      url: "https://drive.google.com/drive/folders/10irM3SxNSOCqmPHWc63ErCQ1R2lG_cHt"
    },
    {
      title: "Data Science",
      provider: "edX – Harvard University",
      icon: "📊",
      color: "from-purple-500 to-pink-500",
      verified: true,
      url: "https://drive.google.com/file/d/1Frvu0jexOWwVgG1iRtWZ7aMieuhmm-Td/view?usp=drive_link"
    },
    {
      title: "Career Edge – Young Professional",
      provider: "TCS iON",
      icon: "🏢",
      color: "from-red-500 to-rose-500",
      verified: true,
      url: "https://drive.google.com/file/d/1-DErERMy9Gc4pWE1cLtAJNTPoHsmGw_Q/view?usp=drive_link"
    },
    {
      title: "Spring Boot Course",
      provider: "Scaler",
      icon: "🌱",
      color: "from-teal-500 to-blue-500",
      verified: true,
      url: "https://drive.google.com/drive/folders/10irM3SxNSOCqmPHWc63ErCQ1R2lG_cHt"
    },
    {
      title: "Cybersecurity Analyst",
      provider: "TATA",
      icon: "🔐",
      color: "from-gray-500 to-black",
      verified: true,
      url: "https://drive.google.com/file/d/1EAckhArcwDkQIrez1oQdhbOnyFCHqUz7/view?usp=drive_link"
    },
    {
      title: "The Joy of Computing using Python",
      provider: "NPTEL",
      icon: "📚",
      color: "from-orange-400 to-pink-400",
      verified: true,
      url: "https://drive.google.com/file/d/1dAniALnuer5ss6rKIyLDtkupC8TEp6MF/view?usp=drive_link"
    },
    {
      title: "SQL Advanced",
      provider: "HackerRank",
      icon: "🗃️",
      color: "from-cyan-500 to-blue-500",
      verified: true,
      url: "https://www.hackerrank.com/certificates/iframe/a3d81cf8b2d1"
    },
    {
      title: "Software Engineering Simulation",
      provider: "Accenture",
      icon: "🧑‍💻",
      color: "from-fuchsia-500 to-purple-600",
      verified: true,
      url: "https://www.linkedin.com/in/yalamanda-rao-papana-5309b9284/overlay/1747925524188/single-media-viewer/?profileId=ACoAAEU0JrQB7vliGQIqooyCLA0LvKOvysw4AW0"
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
