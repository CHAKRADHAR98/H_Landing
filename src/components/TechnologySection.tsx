
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const TechnologySection = () => {
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
    <section id="technology" className="py-20 m-3 rounded-xl bg-neutral-900 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 grid-pattern"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gray-300 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
      
        <div className={`p-8 transition-all duration-700  text-white transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.6s' }}>
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">How Heimdall Works</h3>
              
              <div className="space-y-6">
                {[
                  {
                    number: "01",
                    title: "Connect Your Wallet",
                    description: "Link your Web3 wallet to access the DeCharge Network"
                  },
                  {
                    number: "02",
                    title: "Locate a Charging Station",
                    description: "Find nearby charging points through our app or website"
                  },
                  {
                    number: "03",
                    title: "Charge and Pay Seamlessly",
                    description: "Connect your vehicle and payment processes automatically"
                  },
                  {
                    number: "04",
                    title: "Earn Rewards",
                    description: "Receive DCT tokens for using or providing charging services"
                  }
                ].map((step, index) => (
                  <div 
                    key={index} 
                    className="flex gap-4 opacity-0" 
                    style={{
                      animation: isVisible ? `fade-in 0.5s ease-out ${0.8 + index * 0.2}s forwards` : 'none'
                    }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-bold transition-transform duration-300 hover:scale-110">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{step.title}</h4>
                      <p className="text-neutral-600 dark:text-neutral-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
             
            </div>
            
            <div className={`w-full lg:w-1/2 relative transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{ transitionDelay: '0.6s' }}>
                <img src="/howitworks.jpg" className="rounded-lg"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
