import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

export default function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    // Normally, you’d send credentialResponse.credential (ID token) to the backend
    // For now, we mock user info as the backend currently uses dummy data.
    const dummyUser = {
      id: "user-123",
      email: "user@example.com",
      name: "Google User",
      avatar_url: "https://example.com/avatar.jpg",
    };

    onLogin(dummyUser);
    navigate("/");
  };

  const handleError = () => {
    console.error("Google Sign-In failed");
  };

  return (
    <div className="container">
      <h2>Login to شیرینی بده</h2>
      <p>Sign in with your Google account:</p>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
}
