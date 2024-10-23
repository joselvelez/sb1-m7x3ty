import React from 'react';
import { Shield, Bell, Users, Database, Globe, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const settingsSections = [
  {
    icon: Shield,
    title: 'Security',
    description: 'Password, 2FA, and login settings',
    path: '/settings/security'
  },
  {
    icon: Bell,
    title: 'Notifications',
    description: 'Email and push notification preferences',
    path: '/settings/notifications'
  },
  {
    icon: Users,
    title: 'Team Management',
    description: 'Manage team members and roles',
    path: '/settings/team'
  },
  {
    icon: Database,
    title: 'Data Integration',
    description: 'Connect your data sources',
    path: '/settings/data-integration'
  },
  {
    icon: Globe,
    title: 'Regional Settings',
    description: 'Language and timezone preferences',
    path: '/settings/regional'
  },
  {
    icon: Mail,
    title: 'Email Settings',
    description: 'Configure email notifications and reports',
    path: '/settings/email'
  },
];

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settingsSections.map((section, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => navigate(section.path)}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <section.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">{section.title}</h3>
            </div>
            <p className="text-gray-600">{section.description}</p>
            <button className="mt-4 w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              Configure
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Sessions</h3>
        <div className="space-y-4">
          {[
            { device: 'Chrome - MacOS', location: 'San Francisco, US', time: 'Current session' },
            { device: 'Mobile - iOS', location: 'San Francisco, US', time: '2 hours ago' },
            { device: 'Firefox - Windows', location: 'San Jose, US', time: '1 day ago' },
          ].map((session, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{session.device}</p>
                <p className="text-sm text-gray-500">{session.location}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">{session.time}</p>
                {index > 0 && (
                  <button className="text-sm text-red-600 hover:text-red-700">
                    Revoke access
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}