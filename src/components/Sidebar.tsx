import { 
  BarChart2, 
  PieChart,
  TrendingUp,
  FileText,
  Users,
  Calendar,
  Settings,
  HelpCircle
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { icon: BarChart2, label: 'Dashboard', path: '/' },
  { icon: PieChart, label: 'Planning', path: '/planning' },
  { icon: TrendingUp, label: 'Forecasting', path: '/forecasting' },
  { icon: FileText, label: 'Reports', path: '/reports' },
  { icon: Users, label: 'Collaboration', path: '/collaboration' },
  { icon: Calendar, label: 'Schedule', path: '/schedule' },
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: HelpCircle, label: 'Help', path: '/help' },
];

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-16 h-full w-64 bg-gray-50 border-r border-gray-200">
      <div className="flex flex-col py-4">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
                isActive ? 'bg-blue-50 text-blue-600' : ''
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            <span className="ml-3 font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}