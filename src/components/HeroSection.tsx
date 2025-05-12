
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-20 p-12 pb-16 md:pt-24 md:pb-20 bg-neutral-900 overflow-hidden m-3 rounded-2xl shadow-lg">

         <div className="mb-8 flex items-center gap-4">
          <img src="/logo.jpg" alt="heimdall logo" className="h-16 w-16 rounded-md"/>
          <a href="/" className="flex items-center">
            <span className="font-bold text-xl md:text-5xl text-white">Heimdall</span>
          </a>
        </div>
      
      <div className="absolute inset-0 -z-10 bg-neutral-900"></div>

    
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content with animation */}
          <div className="w-full lg:w-1/2 text-white mb-10 lg:mb-0 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-[fade-in_0.6s_ease-out_0.2s_forwards]">
              <span className="text-gray-300">BRING POWER</span>
              <br />
              <span className="text-gray-300">HOME</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl opacity-0 animate-[fade-in_0.6s_ease-out_0.4s_forwards] text-gray-400">
              Building the foundation for a global energy network - powering cars, drones, 
              and tomorrow's machines
            </p>
          </div>
          
          {/* Right content - charger image with animation */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end opacity-0 animate-[fade-in_0.8s_ease-out_0.5s_forwards]">
            <div className="relative">
              <div className="w-64 h-64 md:w-96 md:h-96 bg-gray-700 rounded-full opacity-70 blur-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
              <img 
                src="/main.jpg" 
                alt="Heimdall Device" 
                className="relative z-10 h-96 animate-float rounded-xl"
              />
            </div>
          </div>
        </div>
        
     
      </div>
    </section>
  );
};

export default HeroSection;
