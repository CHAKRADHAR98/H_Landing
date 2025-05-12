
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const AboutSection = () => {
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
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-300 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Image/Visual side with animation */}
          <div className={`w-full lg:w-1/2 relative transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative z-10">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-600 to-gray-800 p-1">
                <div className="w-full h-full rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-850 grid-pattern relative">
          
                 
                  <img 
                    src="/ev.jpg" 
                    alt="Heimdall Device" 
                    className="w-full h-full object-cover rounded-xl transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-gray-400/20 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-gray-300/20 rounded-full -z-10"></div>
          </div>
          
          {/* Content side with animation */}
          <div className={`w-full lg:w-1/2 transition-all duration-700 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Reimagining</span> EV Charging with Web3
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
              DeCharge Network is building the world's first decentralized charging infrastructure platform, enabling anyone to participate in the growing electric vehicle ecosystem.
            </p>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
              By leveraging blockchain technology, we're creating a transparent, accessible, and community-driven charging network that rewards participants while accelerating the transition to sustainable transportation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: "Decentralized Ownership",
                  description: "Own a stake in the charging infrastructure and earn rewards from usage"
                },
                {
                  title: "Transparent Pricing",
                  description: "Clear, immutable pricing with no hidden fees or intermediaries"
                },
                {
                  title: "Community Governed",
                  description: "Network decisions made by token holders through DAO voting"
                },
                {
                  title: "Sustainable Future",
                  description: "Supporting renewable energy sources and carbon offset initiatives"
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-panel p-5 opacity-0 hover:scale-105 transition-all duration-300" 
                  style={{animation: `fade-in 0.5s ease-out ${0.6 + index * 0.15}s forwards`}}
                >
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{feature.description}</p>
                </div>
              ))}
            </div>
            
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
