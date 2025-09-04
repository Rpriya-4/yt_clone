

import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../utils/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const fetchUserChannel = async (userId) => {
    try {
      const res = await api.get(`/channels/user/${userId}`);
      if (res.data?._id) return res.data._id;
      return null;
    } catch {
      return null;
    }
  };

  const signup = async (fullName, username, email, password) => {
    const res = await api.post("/auth/signup", { fullName, username, email, password });
    let updatedUser = res.data.user;
    const channelId = await fetchUserChannel(updatedUser.id);
    if (channelId) updatedUser = { ...updatedUser, channelId };

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const login = async (email, password) => {
    const res = await api.post("/auth/login", { email, password });
    let updatedUser = res.data.user;
    const channelId = await fetchUserChannel(updatedUser.id);
    if (channelId) updatedUser = { ...updatedUser, channelId };

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  // ✅ Include setUser so CreateChannel can update it
  return (
    <AuthContext.Provider value={{ user, setUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
