import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ user, onLogout }) {
  return (
    <nav style={navStyle}>
      <div>
        <Link to="/" style={{ marginRight: "1rem", fontWeight: "bold" }}>
          شیرینی بده
        </Link>
      </div>
      <div>
        <Link to="/create-team" style={linkStyle}>
          Create Team
        </Link>
        <Link to="/claims" style={linkStyle}>
          Claims
        </Link>
        <button onClick={onLogout} style={logoutBtn}>
          Logout
        </button>
      </div>
    </nav>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.5rem 1rem",
  backgroundColor: "#fff",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const linkStyle = {
  marginRight: "1rem",
};

const logoutBtn = {
  background: "transparent",
  border: "1px solid #007bff",
  color: "#007bff",
  borderRadius: "4px",
  padding: "0.3rem 0.6rem",
};
