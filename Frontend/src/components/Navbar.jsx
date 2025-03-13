// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const navLinks = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Inventory', path: '/inventory' },
  { name: 'Departments', path: '/department' },
  { name: 'Invoices', path: '/invoice' },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Garments Factory</div>
      <div className="flex space-x-4">
        {navLinks.map((link, index) => (
          <Link key={index} to={link.path} className="text-blue-500">
            {link.name}
          </Link>
        ))}
        {token && (
          <button onClick={handleLogout} className="text-red-500">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
