
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, LineChart, PieChart } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center chart-bg">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-[5%] w-24 h-24 rounded-full bg-primary/10 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-[10%] w-32 h-32 rounded-full bg-secondary/10 animate-pulse" style={{animationDelay: "1s"}}></div>
      <div className="absolute top-[15%] left-[20%] text-primary/20"><LineChart size={64} /></div>
      <div className="absolute bottom-[20%] right-[15%] text-secondary/20"><BarChart2 size={48} /></div>
      <div className="absolute bottom-[30%] left-[30%] text-primary/20"><PieChart size={56} /></div>
      
      <div className="container mx-auto px-4 pt-24 md:pt-32 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="slide-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-gray-800">Transforming Data into</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Actionable Insights
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Data Analyst specializing in transforming complex datasets into clear, 
              actionable insights that drive strategic business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                View Projects <ArrowRight size={16} />
              </Button>
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <div className="w-[350px] h-[350px] mx-auto bg-white rounded-lg shadow-xl p-6 rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="h-1/2 mb-4">
                  <div className="h-6 w-2/3 bg-primary/10 rounded-full mb-2"></div>
                  <div className="flex space-x-2">
                    <div className="h-4 w-16 bg-primary/20 rounded-full"></div>
                    <div className="h-4 w-16 bg-secondary/20 rounded-full"></div>
                  </div>
                  <div className="h-32 mt-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <BarChart2 className="text-primary/50" size={80} />
                  </div>
                </div>
                <div className="h-1/3">
                  <div className="h-4 w-full bg-muted rounded-full mb-2"></div>
                  <div className="h-4 w-5/6 bg-muted rounded-full mb-2"></div>
                  <div className="h-4 w-4/6 bg-muted rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
