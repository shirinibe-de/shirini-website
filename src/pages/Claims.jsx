import React, { useEffect, useState } from "react";
import api from "../api";

export default function Claims({ user }) {
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchClaims = async () => {
    try {
      // Placeholder: You’ll need a GET /claims endpoint to return pending claims.
      const res = await api.get("/claims"); // Implement on backend later
      setClaims(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch claims.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClaims();
  }, []);

  const handleVote = async (claimId, voteValue) => {
    try {
      await api.post("/votes", { claim_id: claimId, vote: voteValue });
      // Optionally refetch or update UI:
      fetchClaims();
    } catch (err) {
      console.error(err);
      alert("Failed to submit vote.");
    }
  };

  if (loading) return <div className="container">Loading claims…</div>;

  if (claims.length === 0)
    return <div className="container">No pending claims.</div>;

  return (
    <div className="container">
      <h2>Pending Claims</h2>
      {claims.map((c) => (
        <div key={c.id} className="card">
          <p>
            <strong>{c.claimed_by_name}</strong> claims{" "}
            <strong>{c.claimed_for_name}</strong> had an achievement.
          </p>
          <p>Message: {c.message || "–"}</p>
          <button onClick={() => handleVote(c.id, true)}>👍 Upvote</button>
          <button onClick={() => handleVote(c.id, false)}>👎 Downvote</button>
        </div>
      ))}
    </div>
  );
}
