const About = () => {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "Narasaraopeta Engineering College",
      period: "2022 – 2026",
      grade: "CGPA: 8.55",
      icon: "🎓"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Government Junior College, Martur",
      period: "2020 – 2022",
      grade: "84%",
      icon: "🏫"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-20 h-1 bg-hero-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate and fast-learning full stack developer from Andhra Pradesh, currently pursuing 
              B.Tech in Information Technology at Narasaraopeta Engineering College. I’ve completed training in 
              Generative AI through the Intel Unnati program and built several full stack projects using 
              Firebase, React.js, Python, and Node.js. I love turning ideas into working applications 
              that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm constantly exploring new technologies and improving my skills through hands-on coding, 
              open-source contributions, and real-time applications. I believe in building for impact — 
              and I aim to grow as a developer who crafts elegant, scalable, and accessible digital solutions.
            </p>
            <a
              href="https://drive.google.com/file/d/1WS2HakBCnRkG9jvjLkcShzlajP36z7xp/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-white bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 rounded-full hover:shadow-lg transition-all"
            >
              📄 View My Resume
            </a>
          </div>

          {/* Education timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">Education</h3>
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{edu.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-foreground">{edu.degree}</h4>
                    <p className="text-electric-blue font-medium">{edu.institution}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-muted-foreground">{edu.period}</span>
                      <span className="font-semibold text-deep-purple">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

