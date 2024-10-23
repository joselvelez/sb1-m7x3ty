import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Planning from './pages/Planning';
import Settings from './pages/Settings';
import DataIntegration from './pages/DataIntegration';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Sidebar />
        <main className="pl-64 pt-16">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/planning" element={<Planning />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/data-integration" element={<DataIntegration />} />
            <Route path="/forecasting" element={<Navigate to="/planning" />} />
            <Route path="/reports" element={<Navigate to="/planning" />} />
            <Route path="/collaboration" element={<Navigate to="/planning" />} />
            <Route path="/schedule" element={<Navigate to="/planning" />} />
            <Route path="/help" element={<Navigate to="/planning" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;