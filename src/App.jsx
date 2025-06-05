import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import CreateTeam from "./pages/CreateTeam";
import JoinTeam from "./pages/JoinTeam";
import Claims from "./pages/Claims";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(null);

  // Check localStorage for existing session
  useEffect(() => {
    const storedUser = localStorage.getItem("shirini_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (userInfo) => {
    setUser(userInfo);
    localStorage.setItem("shirini_user", JSON.stringify(userInfo));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("shirini_user");
  };

  // If not logged in, redirect to login
  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <div>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Dashboard user={user} />} />
        <Route path="/create-team" element={<CreateTeam user={user} />} />
        <Route path="/join/:joinToken" element={<JoinTeam user={user} />} />
        <Route path="/claims" element={<Claims user={user} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
