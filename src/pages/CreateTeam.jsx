import React, { useState } from "react";
import api from "../api";

export default function CreateTeam({ user }) {
  const [teamName, setTeamName] = useState("");
  const [joinUrl, setJoinUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/teams", { name: teamName });
      // Backend returns { join_url: "/join/<token>" }
      const { join_url } = res.data;
      setJoinUrl(join_url);
    } catch (err) {
      console.error(err);
      alert("Failed to create team.");
    }
  };

  return (
    <div className="container">
      <h2>Create a Team</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Team Name:
            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              required
              style={{ marginLeft: "0.5rem" }}
            />
          </label>
        </div>
        <button type="submit">Create Team</button>
      </form>
      {joinUrl && (
        <div className="card">
          <p>Team created! Share this invite link:</p>
          <code>{window.location.origin + joinUrl}</code>
        </div>
      )}
    </div>
  );
}
