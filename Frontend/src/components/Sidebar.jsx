// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const sideLinks = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Inventory", path: "/inventory" },
  { name: "Departments", path: "/department" },
  { name: "Invoices", path: "/invoice" },
];

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 w-64 min-h-screen p-4">
      <ul>
        {sideLinks.map((link, index) => (
          <li key={index} className="mb-4">
            <Link to={link.path} className="text-gray-700 hover:text-blue-500">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
