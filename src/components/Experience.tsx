import { Briefcase, GraduationCap, Target } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Investment Recovery & Client Advisory",
      description: "Managing recovery cases, liaising with RTAs, companies, and regulators, handling documentation, and ensuring client's investments are restored or corrected."
    },
    {
      icon: Briefcase,
      title: "Corporate Finance & FP&A",
      description: "Forecasting, budgeting, financial modelling, and business performance tracking."
    },
    {
      icon: Briefcase,
      title: "Business Analysis",
      description: "Creating data-backed recommendations, operational insights, and reports for management."
    },
    {
      icon: Briefcase,
      title: "Exports & International Finance",
      description: "Hands-on handling of financial operations in export-driven setups."
    },
    {
      icon: Briefcase,
      title: "Reporting & Automation",
      description: "Designing dashboards, MIS packs, and automating repetitive tasks to improve efficiency."
    }
  ];

  const education = [
    { degree: "MBA", field: "Finance" },
    { degree: "BBA", field: "Finance" },
    { degree: "PGDIBO", field: "International Business" },
    { degree: "PGDIFM", field: "Financial Management" }
  ];

  const approach = [
    {
      icon: Target,
      title: "People-First Solutions",
      description: "Investments and recoveries often involve emotions, paperwork, and delays. I aim to simplify the process and provide complete clarity."
    },
    {
      icon: Target,
      title: "Accuracy Over Assumptions",
      description: "I rely on correct documentation, data, and verification to ensure clients' investments are protected and restored."
    },
    {
      icon: Target,
      title: "Transparency",
      description: "No hidden charges, no unnecessary steps — I guide clients with full honesty."
    },
    {
      icon: Target,
      title: "Continuous Learning",
      description: "Staying updated on RTA rules, SEBI processes, investment products, and financial tools."
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-secondary/20" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Work Experience */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                        <Icon className="text-primary" size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Education</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all group text-center"
              >
                <GraduationCap className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                <p className="text-muted-foreground text-sm">{edu.field}</p>
              </div>
            ))}
          </div>
        </div>

        {/* My Approach */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-gradient">Approach</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {approach.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl hover:border-accent/50 transition-all group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all">
                        <Icon className="text-accent" size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Work With Me */}
        <div className="mt-20">
          <div className="max-w-3xl mx-auto glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-center mb-6">
              Why Work <span className="text-gradient">With Me</span>
            </h3>
            <ul className="space-y-3">
              {[
                "Strong Track Record in Investment Recovery",
                "Clear, Simplified Process for Clients",
                "Professional Communication With RTAs, Companies & SEBI",
                "Reliable Financial Planning Guidance",
                "End-to-End Support in Finance, Investments & Analysis"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
