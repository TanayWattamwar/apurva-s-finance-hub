import { TrendingUp, RefreshCw, BarChart3, Database, DollarSign, FileText, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Investment Planning & Portfolio Advisory",
      description: "Personalized investment strategies with mutual funds, fixed-income, and diversified planning tailored to your risk profile.",
      features: ["Risk-based profiling", "Short & long-term strategies", "Portfolio optimization"]
    },
    {
      icon: RefreshCw,
      title: "Investment Recovery Assistance",
      description: "Helping clients recover lost, stuck, unclaimed, or transferred investments through end-to-end support.",
      features: ["Share & bond recovery", "RTA coordination", "SEBI communication"]
    },
    {
      icon: BarChart3,
      title: "Financial Modelling & Forecasting",
      description: "Building comprehensive financial models including P&L, Balance Sheet, and Cash Flow for better decision making.",
      features: ["Scenario analysis", "Business planning", "Growth projections"]
    },
    {
      icon: Database,
      title: "Business & Financial Analysis",
      description: "KPI analysis, performance tracking, reporting, dashboards, and operational insights for leadership teams.",
      features: ["Performance metrics", "Executive dashboards", "Trend analysis"]
    },
    {
      icon: DollarSign,
      title: "Budgeting & Variance Management",
      description: "Preparing budgets, monitoring performance variances, cost control, and corrective planning.",
      features: ["Budget preparation", "Variance tracking", "Cost optimization"]
    },
    {
      icon: FileText,
      title: "Data Reporting & Automation",
      description: "Excel/Power BI dashboards, automated MIS reporting, data structuring, and insight generation.",
      features: ["Custom dashboards", "Automated reports", "Data visualization"]
    },
    {
      icon: Globe,
      title: "Export / International Trade Finance Advisory",
      description: "Assistance with export finance processes, documentation, working capital, and risk management.",
      features: ["Trade documentation", "Working capital", "Risk mitigation"]
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive financial solutions tailored to your unique needs
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group hover:shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                      <Icon className="text-primary" size={24} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-center">
                          <span className="w-1 h-1 rounded-full bg-accent mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
