// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Inventory", path: "/inventory" },
  { name: "Departments", path: "/department" },
  { name: "Invoices", path: "/invoice" },
];

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Garments Factory</div>
      <div className="flex space-x-4">
        {/* {navLinks.map((link, index) => (
          <Link key={index} to={link.path} className="text-blue-500">
            {link.name}
          </Link>
        ))} */}
      </div>
    </nav>
  );
};

export default Navbar;
