
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "R", "SQL", "C++", "C"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Frameworks",
      skills: ["Angular"],
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Google Colab"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-hero-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}></div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="bg-white text-foreground px-3 py-2 rounded-lg text-sm font-medium border border-gray-200 hover:border-electric-blue hover:text-electric-blue transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills showcase */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Full Stack Development",
              "System Design",
              "Problem Solving",
              "Agile Development",
              "API Development",
              "Database Design",
              "Performance Optimization",
              "Code Review"
            ].map((competency) => (
              <span 
                key={competency} 
                className="bg-hero-gradient text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-electric-blue/25 transition-all duration-300 cursor-default"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
