import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to TaskManager</h1>
      <p className="mb-6">Manage your tasks efficiently with our MERN app.</p>
      <div className="space-x-4">
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">Login</Link>
        <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded">Register</Link>
      </div>
    </div>
  );
};

export default Home;
