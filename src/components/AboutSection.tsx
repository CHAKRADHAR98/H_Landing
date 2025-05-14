
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
  <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-600 to-gray-800 p-1 min-h-[300px]">
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
              <span className="gradient-text">Reimagining</span> Access Control with Solana
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
            Project Heimdall is building an access control system that puts security back in your hands, letting anyone secure their spaces without complex keys or unreliable cards.
            </p>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
            By using personal digital signatures, we're creating a simple, reliable, and user-friendly security network that gives you peace of mind while making physical security more accessible for homes and businesses alike.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: "Keyless, Tamper-Proof Access",
                  description: "Use your digital wallet to scan and unlock doors with ease,No physical keys to lose, copy, or steal"
                },
                {
                  title: "Cryptographic Security",
                  description: "Solana verification secures every access attempt."
                },
                {
                  title: "Real-Time Monitoring & Remote Control",
                  description: "Manage access permissions instantly from anywhere."
                },
                {
                  title: "Easy Installation & Integration",
                  description: "Works alongside existing locks without replacing your door hardware."
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
