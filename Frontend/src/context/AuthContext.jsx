import { createContext, useContext, useState, useEffect } from "react";
import axios from "../utils/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);

  const login = async (email, password) => {
    const res = await axios.post("/auth/login", { email, password });
    setUser(res.data);
    localStorage.setItem("user", JSON.stringify(res.data));
  };

  const register = async (name, email, password) => {
    const res = await axios.post("/auth/register", { name, email, password });
    setUser(res.data);
    localStorage.setItem("user", JSON.stringify(res.data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
