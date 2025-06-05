import React from "react";

export default function Dashboard({ user }) {
  return (
    <div className="container">
      <h2>Welcome, {user.name}!</h2>
      <p>This is your dashboard. From here, you can:</p>
      <ul>
        <li>Create a new team → <a href="/create-team">Create Team</a></li>
        <li>Join a team via invite URL → <a href="/join/TOKEN_HERE">Join Team</a></li>
        <li>View and vote on Claims → <a href="/claims">Claims</a></li>
      </ul>
    </div>
  );
}
