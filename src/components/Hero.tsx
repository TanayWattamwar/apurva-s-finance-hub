import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import apurvaPhoto from "@/assets/apurva-photo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold">
                Investment Planning Expert
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient">Apurva Barve</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground">
              Investment Planning & Recovery Specialist
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              Financial Analyst | Business Strategist
            </p>
            
            <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
              Specializing in investment planning, portfolio optimization, and recovery assistance for individuals and families in Pune, India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:border-primary hover:bg-primary/10"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Services
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl opacity-50" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={apurvaPhoto}
                  alt="Apurva Barve"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
