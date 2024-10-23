import React from 'react';
import { Database, Plus, RefreshCw, Check, AlertCircle } from 'lucide-react';

const connectors = [
  {
    name: 'Salesforce',
    status: 'Connected',
    lastSync: '10 minutes ago',
    icon: 'https://images.unsplash.com/photo-1660067938391-c2cd21f83ba6?w=50&h=50&fit=crop',
  },
  {
    name: 'QuickBooks',
    status: 'Connected',
    lastSync: '1 hour ago',
    icon: 'https://images.unsplash.com/photo-1660067938125-b02b7c3f9c3a?w=50&h=50&fit=crop',
  },
  {
    name: 'NetSuite',
    status: 'Error',
    lastSync: '2 hours ago',
    icon: 'https://images.unsplash.com/photo-1660067938275-b02b7c3f9c3b?w=50&h=50&fit=crop',
  }
];

export default function DataIntegration() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Data Integration</h2>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="h-5 w-5 mr-2" />
          Add New Connection
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Database className="h-6 w-6 text-blue-600" />
              <h3 className="ml-2 text-lg font-semibold text-gray-900">Active Connections</h3>
            </div>
            <button className="flex items-center text-blue-600 hover:text-blue-700">
              <RefreshCw className="h-5 w-5 mr-1" />
              Sync All
            </button>
          </div>

          <div className="space-y-4">
            {connectors.map((connector, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <img
                    src={connector.icon}
                    alt={connector.name}
                    className="w-10 h-10 rounded-lg"
                  />
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">{connector.name}</p>
                    <p className="text-sm text-gray-500">Last sync: {connector.lastSync}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  {connector.status === 'Connected' ? (
                    <span className="flex items-center text-green-600">
                      <Check className="h-4 w-4 mr-1" />
                      Connected
                    </span>
                  ) : (
                    <span className="flex items-center text-red-600">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      Error
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sync History</h3>
          <div className="space-y-4">
            {[
              { name: 'Full Sync', status: 'Completed', time: '2 hours ago', duration: '5m 30s' },
              { name: 'Incremental Sync', status: 'Completed', time: '4 hours ago', duration: '2m 15s' },
              { name: 'Schema Update', status: 'Failed', time: '1 day ago', duration: '1m 45s' },
            ].map((sync, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{sync.name}</p>
                  <p className="text-sm text-gray-500">{sync.time} • Duration: {sync.duration}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    sync.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {sync.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}