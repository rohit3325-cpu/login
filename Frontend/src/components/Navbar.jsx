import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">TaskManager</Link>
      <div className="space-x-4">
        {!user && (
          <>
            <Link to="/login" className="text-blue-500">Login</Link>
            <Link to="/register" className="text-blue-500">Register</Link>
          </>
        )}
        {user && (
          <>
            <span className="text-gray-700">{user.name}</span>
            <button onClick={logout} className="text-red-500">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
