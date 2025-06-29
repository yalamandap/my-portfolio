const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Experience</h2>
          <div className="w-20 h-1 bg-hero-gradient mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-hero-gradient hidden md:block"></div>

            {/* Experience card */}
            <div className="relative bg-white rounded-xl shadow-lg p-8 border border-blue-100 hover:shadow-xl transition-all duration-300 ml-0 md:ml-20">
              {/* Timeline dot */}
              <div className="absolute -left-12 top-8 w-6 h-6 bg-hero-gradient rounded-full border-4 border-white shadow-lg hidden md:block"></div>

              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Generative AI Trainee</h3>
                    <p className="text-xl text-electric-blue font-semibold">Intel Unnati Program</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground font-medium">March 5 – May 5, 2025</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-electric-blue mt-1">🤖</span>
                    <p className="text-muted-foreground">
                      Completed Intel’s Generative AI Industrial Training focused on NLP, Transformers, and Text Generation models.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-deep-purple mt-1">🧠</span>
                    <p className="text-muted-foreground">
                      Gained hands-on experience in Hugging Face, PyTorch, TensorFlow, and deployment-ready AI solutions.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-neon-cyan mt-1">📈</span>
                    <p className="text-muted-foreground">
                      Built small-scale applications using sentence embeddings, transformers, and real-world prompts.
                    </p>
                  </div>
                </div>

                {/* Skills used */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-muted-foreground mb-2">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Transformers', 'NLP', 'Hugging Face', 'PyTorch', 'TensorFlow'].map((skill) => (
                      <span key={skill} className="bg-gradient-to-r from-blue-100 to-purple-100 text-deep-purple px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

