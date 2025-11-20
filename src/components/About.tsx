const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>
          
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl hover:shadow-xl transition-all">
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                Investment Planning & Recovery Specialist | Financial Analyst | Business Strategist
              </h3>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  Hi, I'm Apurva Barve, a finance professional based in Pune, India, specializing in investment planning, 
                  portfolio optimization, and recovery assistance for individuals and families.
                </p>
                
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-4">
                  Alongside this, I bring strong expertise in corporate finance, business analysis, and data-driven 
                  financial decision-making. My goal is to help people and businesses make smarter financial choices, 
                  recover what is rightfully theirs, and build long-term financial clarity.
                </p>
              </div>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-xl text-center hover:border-primary/50 transition-all">
                <div className="text-3xl font-bold text-primary mb-2">MBA</div>
                <div className="text-sm text-muted-foreground">In Finance</div>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center hover:border-primary/50 transition-all">
                <div className="text-3xl font-bold text-accent mb-2">Pune</div>
                <div className="text-sm text-muted-foreground">Based in India</div>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center hover:border-primary/50 transition-all">
                <div className="text-3xl font-bold text-primary mb-2">Expert</div>
                <div className="text-sm text-muted-foreground">Recovery Specialist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
