
const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "VIT-AP University",
      period: "2023 – 2027",
      grade: "CGPA: 8.66",
      icon: "🎓"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Srinivasa Junior College",
      period: "2021 – 2023",
      grade: "98%",
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
              B.Tech in Computer Science at VIT-AP University. With experience in scalable system development 
              through my internship at Amazon, and hands-on experience in React.js, Java, and databases, 
              I enjoy building things that live on the web.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in technology is driven by curiosity and a desire to solve real-world problems 
              through innovative solutions. I'm always eager to learn new technologies and take on 
              challenging projects that push my boundaries.
            </p>
          </div>

          {/* Education timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
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
