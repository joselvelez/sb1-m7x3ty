import { ArrowUp, ArrowDown, DollarSign, Users, TrendingUp, BarChart } from 'lucide-react';

const metrics = [
  {
    title: 'Revenue',
    value: '$2.4M',
    change: '+12.5%',
    isPositive: true,
    icon: DollarSign,
  },
  {
    title: 'Expenses',
    value: '$1.2M',
    change: '-8.1%',
    isPositive: true,
    icon: TrendingUp,
  },
  {
    title: 'Users',
    value: '1,234',
    change: '+23.1%',
    isPositive: true,
    icon: Users,
  },
  {
    title: 'Growth',
    value: '15.2%',
    change: '+4.3%',
    isPositive: true,
    icon: BarChart,
  },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg">
                <metric.icon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              {metric.isPositive ? (
                <ArrowUp className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDown className="h-4 w-4 text-red-500" />
              )}
              <span
                className={`text-sm font-medium ml-1 ${
                  metric.isPositive ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {metric.change}
              </span>
              <span className="text-sm text-gray-500 ml-2">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Forecast</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Revenue chart will be displayed here</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Expense Analysis</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Expense chart will be displayed here</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">
                  Budget update for Q2 2024
                </p>
                <p className="text-sm text-gray-500">Updated by John Doe • 2 hours ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}