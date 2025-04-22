import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import Image from 'next/image';
import { AnimatedText } from '@/components/ui/animated-text';
import { AnimatedCard } from '@/components/ui/animated-card';

export function AdminDashboardSection() {
  const dashboardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const dashboard = dashboardRef.current;
          if (!dashboard) return;
          
          // Animate dashboard elements
          const chartElements = dashboard.querySelectorAll('.dashboard-chart');
          const dataElements = dashboard.querySelectorAll('.dashboard-data');
          
          animate(chartElements, {
            opacity: [0, 1],
            translateY: [20, 0],
            delay: stagger(150),
            easing: 'easeOutExpo',
          });
          
          animate(dataElements, {
            opacity: [0, 1],
            scale: [0.9, 1],
            delay: stagger(100, {start: 300}),
            easing: 'easeOutExpo',
          });
        }
      },
      { threshold: 0.2 }
    );
    
    if (dashboardRef.current) {
      observer.observe(dashboardRef.current);
    }
    
    return () => {
      if (dashboardRef.current) {
        observer.unobserve(dashboardRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText
            text="Powerful Management Dashboard"
            className="text-4xl md:text-5xl font-bold mb-4 text-primary"
            animation="slideUp"
          />
          <AnimatedText
            text="Complete control and visibility over your access control system"
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            animation="fadeIn"
            delay={400}
          />
        </div>
        
        <div className="max-w-6xl mx-auto" ref={dashboardRef}>
          <AnimatedCard className="p-6 shadow-xl rounded-2xl overflow-hidden bg-white dark:bg-gray-700">
            {/* Dashboard Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-200 dark:border-gray-600 pb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Heimdall Security Dashboard</h2>
              </div>
              
              <div className="flex space-x-4">
                <div className="px-4 py-2 bg-gray-100 dark:bg-gray-600 rounded-md flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Last 30 days</span>
                </div>
                
                <button className="px-4 py-2 bg-primary text-white rounded-md flex items-center hover:bg-primary/90 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Export</span>
                </button>
              </div>
            </div>
            
            {/* Dashboard Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="dashboard-data bg-gray-50 dark:bg-gray-600 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Total Access Events</p>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">13,495</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-700/30 flex items-center justify-center text-green-500 dark:text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-green-500 dark:text-green-400 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    8.2%
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">vs previous month</span>
                </div>
              </div>
              
              <div className="dashboard-data bg-gray-50 dark:bg-gray-600 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Active Users</p>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">2,856</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-700/30 flex items-center justify-center text-blue-500 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-green-500 dark:text-green-400 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    12.4%
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">vs previous month</span>
                </div>
              </div>
              
              <div className="dashboard-data bg-gray-50 dark:bg-gray-600 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Denied Access</p>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">124</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-700/30 flex items-center justify-center text-red-500 dark:text-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-red-500 dark:text-red-400 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    3.2%
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">vs previous month</span>
                </div>
              </div>
              
              <div className="dashboard-data bg-gray-50 dark:bg-gray-600 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Secured Areas</p>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">42</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-700/30 flex items-center justify-center text-purple-500 dark:text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-green-500 dark:text-green-400 flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    5.0%
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">vs previous month</span>
                </div>
              </div>
            </div>
            
            {/* Dashboard Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="dashboard-chart lg:col-span-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Access Activity</h3>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Daily</button>
                    <button className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full">Weekly</button>
                    <button className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full">Monthly</button>
                  </div>
                </div>
                
                <div className="h-72 relative">
                  <div className="absolute bottom-0 left-0 right-0 h-64 flex items-end">
                    <div className="flex-1 mx-1">
                      <div className="h-40 bg-primary/20 dark:bg-primary/30 rounded-t-md relative group">
                        <div className="absolute bottom-0 left-0 right-0 bg-primary h-[65%] rounded-t-md transition-all group-hover:h-[70%]"></div>
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          125 accesses
                        </div>
                      </div>
                      <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Mon</p>
                    </div>
                    <div className="flex-1 mx-1">
                      <div className="h-48 bg-primary/20 dark:bg-primary/30 rounded-t-md relative group">
                        <div className="absolute bottom-0 left-0 right-0 bg-primary h-[75%] rounded-t-md transition-all group-hover:h-[80%]"></div>
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          182 accesses
                        </div>
                      </div>
                      <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Tue</p>
                    </div>
                    <div className="flex-1 mx-1">
                      <div className="h-56 bg-primary/20 dark:bg-primary/30 rounded-t-md relative group">
                        <div className="absolute bottom-0 left-0 right-0 bg-primary h-[85%] rounded-t-md transition-all group-hover:h-[90%]"></div>
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          204 accesses
                        </div>
                      </div>
                      <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Wed</p>
                    </div>
                    <div className="flex-1 mx-1">
                      <div className="h-52 bg-primary/20 dark:bg-primary/30 rounded-t-md relative group">
                        <div className="absolute bottom-0 left-0 right-0 bg-primary h-[80%] rounded-t-md transition-all group-hover:h-[85%]"></div>
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          198 accesses
                        </div>
                      </div>
                      <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Thu</p>
                    </div>
                    <div className="flex-1 mx-1">
                      <div className="h-60 bg-primary/20 dark:bg-primary/30 rounded-t-md relative group">
                        <div className="absolute bottom-0 left-0 right-0 bg-primary h-[90%] rounded-t-md transition-all group-hover:h-[95%]"></div>
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          215 accesses
                        </div>
                      </div>
                      <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Fri</p>
                    </div>
                    <div className="flex-1 mx-1">
                      <div className="h-32 bg-primary/20 dark:bg-primary/30 rounded-t-md relative group">
                        <div className="absolute bottom-0 left-0 right-0 bg-primary h-[50%] rounded-t-md transition-all group-hover:h-[55%]"></div>
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          112 accesses
                        </div>
                      </div>
                      <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Sat</p>
                    </div>
                    <div className="flex-1 mx-1">
                      <div className="h-20 bg-primary/20 dark:bg-primary/30 rounded-t-md relative group">
                        <div className="absolute bottom-0 left-0 right-0 bg-primary h-[40%] rounded-t-md transition-all group-hover:h-[45%]"></div>
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          87 accesses
                        </div>
                      </div>
                      <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Sun</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="dashboard-chart bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Access Distribution</h3>
                
                <div className="h-72 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    {/* Donut chart with SVG */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#1A2980" strokeWidth="20" strokeDasharray="188.5 251.3" />
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#26D0CE" strokeWidth="20" strokeDasharray="62.8 251.3" strokeDashoffset="-188.5" />
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#FF8C42" strokeWidth="20" strokeDasharray="31.4 251.3" strokeDashoffset="-125.7" />
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#ccc" strokeWidth="20" strokeDasharray="25.1 251.3" strokeDashoffset="-94.3" />
                      <text x="50" y="50" textAnchor="middle" dy=".3em" fontSize="12" fill="#444" className="dark:fill-white">
                        2,856
                      </text>
                      <text x="50" y="62" textAnchor="middle" dy=".3em" fontSize="8" fill="#777" className="dark:fill-gray-300">
                        Total Users
                      </text>
                    </svg>
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Employees</span>
                    </div>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-secondary rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Visitors</span>
                    </div>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-accent rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Contractors</span>
                    </div>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="dashboard-chart bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Activity</h3>
                <button className="text-sm text-primary hover:underline">View All</button>
              </div>
              
              <div className="space-y-4">
                {[
                  { 
                    user: "Alex Johnson", 
                    action: "Door Access Granted", 
                    location: "Main Entrance", 
                    time: "2 minutes ago",
                    color: "green"
                  },
                  { 
                    user: "Sarah Miller", 
                    action: "Door Access Granted", 
                    location: "Conference Room", 
                    time: "15 minutes ago",
                    color: "green"
                  },
                  { 
                    user: "Unknown User", 
                    action: "Door Access Denied", 
                    location: "Server Room", 
                    time: "32 minutes ago",
                    color: "red"
                  },
                  { 
                    user: "James Wilson", 
                    action: "Door Access Granted", 
                    location: "Office #212", 
                    time: "1 hour ago",
                    color: "green"
                  },
                  { 
                    user: "Emily Davis", 
                    action: "Permission Updated", 
                    location: "Admin Dashboard", 
                    time: "3 hours ago",
                    color: "blue"
                  },
                ].map((activity, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-gray-600">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full bg-${activity.color}-100 dark:bg-${activity.color}-700/30 flex items-center justify-center text-${activity.color}-500 dark:text-${activity.color}-400 mr-4`}>
                        {activity.color === "green" && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        )}
                        {activity.color === "red" && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        )}
                        {activity.color === "blue" && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-1.543-.94-3.31.826-2.37 2.37a1.724 1.724 0 00-1.065 2.572c-1.756.426-1.756 2.924 0 3.35a1.724 1.724 0 001.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800 dark:text-white">{activity.user}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{activity.action} • {activity.location}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <button className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  Load More
                </button>
              </div>
            </div>
          </AnimatedCard>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 dark:text-gray-400">All access events are securely recorded on the Solana blockchain for immutable audit trails.</p>
          </div>
        </div>
      </div>
    </section>
  );
}