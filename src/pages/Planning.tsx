import React, { useState } from 'react';
import { PieChart, TrendingUp, Calendar } from 'lucide-react';
import Modal from '../components/Modal';
import BudgetForm from '../components/BudgetForm';
import BudgetCard from '../components/BudgetCard';

export default function Planning() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateBudget = (data: any) => {
    console.log('New budget data:', data);
    // Here you would typically save the budget data to your backend
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Financial Planning</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <BudgetCard onCreateClick={() => setIsModalOpen(true)} />

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center mb-4">
            <PieChart className="h-6 w-6 text-blue-600" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900">Resource Allocation</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Marketing</span>
              <span className="text-sm font-bold text-gray-900">35%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">R&D</span>
              <span className="text-sm font-bold text-gray-900">25%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Operations</span>
              <span className="text-sm font-bold text-gray-900">40%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900">Growth Targets</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="font-medium text-gray-900">Annual Target</p>
              <p className="text-2xl font-bold text-green-600 mt-1">15.8%</p>
              <p className="text-sm text-gray-600 mt-1">Current progress: 8.3%</p>
            </div>
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Adjust Targets
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Planning Calendar</h3>
        <div className="space-y-4">
          {['Annual Budget Review', 'Quarterly Planning Session', 'Department Budget Submission'].map((event, index) => (
            <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
              <Calendar className="h-5 w-5 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">{event}</p>
                <p className="text-sm text-gray-500">Upcoming • Next Week</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New Budget"
      >
        <BudgetForm
          onSubmit={handleCreateBudget}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
}