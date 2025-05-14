
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-neutral-900 m-3 rounded-2xl shadow-lg" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/90 to-neutral-900/90 -z-10"></div>
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10 -z-10"></div>
      
      {/* Glowing circles with animation */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white opacity-20 blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-white opacity-20 blur-3xl -z-10 animate-pulse-slow" style={{animationDelay: "1.5s"}}></div>
      
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className={`max-w-3xl mx-auto transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
          Upgrade Your Security Today
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10">
          Be part of creating safer spaces with simpler, stronger access control. Whether you're a homeowner, business, or property manager, Project Heimdall offers security that just works.
          </p>

          <h2 className="font-medium mb-2 text-white text-2xl">Join the waitlist</h2>
          
          <div className={`glass-panel bg-white/10 border-white/20 p-6 text-white transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
            style={{transitionDelay: '0.7s'}}>
           
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 focus:scale-[1.01]"
              />
              <Button className="bg-white text-neutral-900 hover:bg-gray-200 transition-transform hover:scale-105">
                Join
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
