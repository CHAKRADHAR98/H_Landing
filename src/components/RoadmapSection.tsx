
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const RoadmapSection = () => {
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

  const milestones = [
    {
      quarter: "Q1 2024",
      title: "Foundation Phase",
      completed: true,
      items: [
        "Protocol whitepaper publication",
        "Core team formation",
        "Seed funding round",
        "MVP development"
      ]
    },
    {
      quarter: "Q2 2024",
      title: "Network Development",
      completed: true,
      items: [
        "Alpha testnet launch",
        "Initial hardware partnerships",
        "Community building",
        "Governance framework design"
      ]
    },
    {
      quarter: "Q3 2024",
      title: "Public Beta",
      completed: false,
      items: [
        "Token generation event",
        "Mainnet beta launch",
        "Initial charging stations deployment",
        "Mobile app release"
      ]
    },
    {
      quarter: "Q4 2024",
      title: "Expansion Phase",
      completed: false,
      items: [
        "Full mainnet launch",
        "DAO activation",
        "Multi-chain integration",
        "Regional expansion program"
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-20 md:py-32 bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 grid-pattern"></div>
      <div className="absolute top-0 left-0 w-80 h-80 bg-gray-300 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="gradient-text">Roadmap</span> to Transformation
          </h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300">
            We're building a sustainable future step by step. Track our progress and upcoming milestones as we revolutionize charging infrastructure.
          </p>
        </div>
        
        {/* Desktop roadmap (hidden on mobile) */}
        <div className="hidden md:block relative mb-16">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-neutral-200 dark:bg-neutral-700"></div>
          
          <div className="relative">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`flex items-center mb-20 ${index % 2 === 0 ? '' : 'flex-row-reverse'} opacity-0`} 
                style={{
                  animation: isVisible ? `fade-in 0.7s ease-out ${0.3 + index * 0.2}s forwards` : 'none'
                }}
              >
                <div className="w-1/2 pr-12 text-right flex flex-col items-end">
                  {index % 2 === 0 ? (
                    <>
                      <div className="text-sm text-gray-600 font-semibold mb-1">{milestone.quarter}</div>
                      <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                      <ul className="space-y-2 list-none">
                        {milestone.items.map((item, idx) => (
                          <li key={idx} className="text-neutral-600 dark:text-neutral-400">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : <div className="w-full h-0.5 bg-neutral-200 dark:bg-neutral-700"></div>}
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-neutral-800 border-4 border-neutral-200 dark:border-neutral-700 flex items-center justify-center transition-all duration-500 hover:scale-110">
                  {milestone.completed ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-500 to-gray-700 animate-pulse-slow"></div>
                  )}
                </div>
                
                <div className="w-1/2 pl-12">
                  {index % 2 !== 0 ? (
                    <>
                      <div className="text-sm text-gray-600 font-semibold mb-1">{milestone.quarter}</div>
                      <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                      <ul className="space-y-2 list-none">
                        {milestone.items.map((item, idx) => (
                          <li key={idx} className="text-neutral-600 dark:text-neutral-400">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : <div className="w-full h-0.5 bg-neutral-200 dark:bg-neutral-700"></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile roadmap (visible only on mobile) */}
        <div className="md:hidden space-y-8">
          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 relative opacity-0" 
              style={{
                animation: isVisible ? `fade-in 0.5s ease-out ${0.3 + index * 0.15}s forwards` : 'none'
              }}
            >
              {milestone.completed && (
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800/30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              )}
              <div className="text-sm text-gray-600 font-semibold mb-1">{milestone.quarter}</div>
              <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
              <ul className="space-y-2 list-none">
                {milestone.items.map((item, idx) => (
                  <li key={idx} className="text-neutral-600 dark:text-neutral-400 flex items-start">
                    <span className="mr-2">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
      
      </div>
    </section>
  );
};

export default RoadmapSection;
