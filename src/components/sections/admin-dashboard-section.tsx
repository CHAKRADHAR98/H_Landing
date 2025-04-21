import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { AnimatedText } from '@/components/ui/animated-text';
import { Button } from '@/components/ui/button';

export function AdminDashboardSection() {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('users');
  
  // Animation for dashboard appearance
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          anime({
            targets: dashboardRef.current,
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 800,
            easing: 'easeOutExpo',
          });
          
          // Animate dashboard elements
          anime({
            targets: '.dashboard-element',
            opacity: [0, 1],
            translateY: [20, 0],
            delay: anime.stagger(100, {start: 300}),
            duration: 600,
            easing: 'easeOutQuad',
          });
          
          observer.unobserve(entries[0].target);
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
  
  // Fake user data for demo
  const users = [
    { id: 1, name: 'Alice', publicKey: 'DjT9n5...4Xzjk', role: 'Admin', lastAccess: '2 hours ago' },
    { id: 2, name: 'Bob', publicKey: 'H7Rc6t...8Kmns', role: 'Resident', lastAccess: '1 day ago' },
    { id: 3, name: 'Carol', publicKey: 'L9Pq2w...5Trfv', role: 'Guest', lastAccess: 'Never' },
  ];
  
  // Fake access logs for demo
  const logs = [
    { id: 1, user: 'Alice', door: 'Main Entrance', time: '2 hours ago', status: 'Granted' },
    { id: 2, user: 'Bob', door: 'Gym Access', time: '1 day ago', status: 'Granted' },
    { id: 3, user: 'Unknown', door: 'Server Room', time: '3 days ago', status: 'Denied' },
  ];
  
  return (
    <section id="admin-dashboard" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText
            text="Powerful Admin Dashboard"
            className="text-4xl md:text-5xl font-bold mb-4 text-primary"
            animation="slideUp"
          />
          <AnimatedText
            text="Complete control over your access system with an intuitive management interface"
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            animation="fadeIn"
            delay={400}
          />
        </div>
        
        <div 
          ref={dashboardRef}
          className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden opacity-0"
        >
          {/* Dashboard Header */}
          <div className="bg-primary p-4 text-white">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold dashboard-element">Heimdall Admin Panel</h3>
              <div className="flex items-center space-x-2 dashboard-element">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Dashboard Tabs */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex">
              <button
                className={`dashboard-element px-6 py-3 text-sm font-medium ${
                  activeTab === 'users'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-500 hover:text-primary'
                }`}
                onClick={() => setActiveTab('users')}
              >
                Users & Permissions
              </button>
              <button
                className={`dashboard-element px-6 py-3 text-sm font-medium ${
                  activeTab === 'logs'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-500 hover:text-primary'
                }`}
                onClick={() => setActiveTab('logs')}
              >
                Access Logs
              </button>
              <button
                className={`dashboard-element px-6 py-3 text-sm font-medium ${
                  activeTab === 'settings'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-500 hover:text-primary'
                }`}
                onClick={() => setActiveTab('settings')}
              >
                System Settings
              </button>
            </nav>
          </div>
          
          {/* Dashboard Content */}
          <div className="p-6">
            {activeTab === 'users' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-medium dashboard-element">Manage Users</h4>
                  <Button size="sm" className="dashboard-element">Add User</Button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dashboard-element">Name</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dashboard-element">Public Key</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dashboard-element">Role</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dashboard-element">Last Access</th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dashboard-element">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr 
                          key={user.id} 
                          className="border-b border-gray-200 dark:border-gray-700 dashboard-element hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <td className="px-4 py-3 whitespace-nowrap">{user.name}</td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className="font-mono text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                              {user.publicKey}
                            </span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              user.role === 'Admin' 
                                ? 'bg-primary/10 text-primary' 
                                : user.role === 'Resident'
                                ? 'bg-secondary/10 text-secondary'
                                : 'bg-accent/10 text-accent'
                            }`}>
                              {user.role}
                            </span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">{user.lastAccess}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-right">
                            <button className="text-primary hover:text-primary/80 mr-3">Edit</button>
                            <button className="text-red-600 hover:text-red-500">Revoke</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            {activeTab === 'logs' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-medium dashboard-element">Access Logs</h4>
                  <div className="dashboard-element">
                    <select className="text-sm border border-gray-300 rounded px-2 py-1">
                      <option>All Entries</option>
                      <option>Granted Only</option>
                      <option>Denied Only</option>
                    </select>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dashboard-element">User</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dashboard-element">Access Point</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dashboard-element">Time</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dashboard-element">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {logs.map((log) => (
                        <tr 
                          key={log.id} 
                          className="border-b border-gray-200 dark:border-gray-700 dashboard-element hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <td className="px-4 py-3 whitespace-nowrap">{log.user}</td>
                          <td className="px-4 py-3 whitespace-nowrap">{log.door}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">{log.time}</td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              log.status === 'Granted' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' 
                                : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                            }`}>
                              {log.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="dashboard-element">
                  <h4 className="text-lg font-medium mb-4">System Configuration</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Access Token Expiry
                      </label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2">
                        <option>15 minutes</option>
                        <option>30 minutes</option>
                        <option>1 hour</option>
                        <option>24 hours</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Security Level
                      </label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2">
                        <option>Standard</option>
                        <option>Enhanced</option>
                        <option>Maximum</option>
                      </select>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="notifications" className="mr-2" />
                      <label htmlFor="notifications" className="text-sm text-gray-700 dark:text-gray-300">
                        Enable access notifications
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="dashboard-element">
                  <h4 className="text-lg font-medium mb-4">Blockchain Settings</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Solana Network
                      </label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2">
                        <option>Mainnet</option>
                        <option>Testnet</option>
                        <option>Devnet</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Transaction Priority
                      </label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2">
                        <option>Standard</option>
                        <option>High</option>
                        <option>Urgent</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        RPC Endpoint
                      </label>
                      <input 
                        type="text" 
                        className="w-full border border-gray-300 rounded px-3 py-2" 
                        value="https://api.mainnet-beta.solana.com" 
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2 dashboard-element">
                  <Button className="mt-4">Save Settings</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}