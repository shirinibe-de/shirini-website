import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

export default function JoinTeam({ user }) {
  const { joinToken } = useParams();
  const [message, setMessage] = useState("Joining...");

  useEffect(() => {
    const join = async () => {
      try {
        await api.post(`/join/${joinToken}`);
        setMessage("You have successfully joined the team!");
      } catch (err) {
        console.error(err);
        setMessage("Failed to join team. Perhaps the invite is invalid.");
      }
    };
    join();
  }, [joinToken]);

  return (
    <div className="container">
      <h2>Join Team</h2>
      <p>{message}</p>
    </div>
  );
}
