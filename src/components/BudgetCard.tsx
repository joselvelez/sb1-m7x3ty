import React from 'react';
import { Calendar } from 'lucide-react';

interface BudgetCardProps {
  onCreateClick: () => void;
}

export default function BudgetCard({ onCreateClick }: BudgetCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center mb-4">
        <Calendar className="h-6 w-6 text-blue-600" />
        <h3 className="ml-2 text-lg font-semibold text-gray-900">Budget Planning</h3>
      </div>
      <div className="space-y-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="font-medium text-gray-900">Q2 2024 Budget</p>
          <p className="text-sm text-gray-600 mt-1">Due in 15 days</p>
          <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>
        <button 
          onClick={onCreateClick}
          className="w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
        >
          Create New Budget
        </button>
      </div>
    </div>
  );
}