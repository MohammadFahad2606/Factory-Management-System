// src/pages/Dashboard.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
 
      <div className="flex flex-1">
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          <p>Welcome to your Garments Factory Management System Dashboard.</p>
          {/* Add additional dashboard widgets and content here */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
