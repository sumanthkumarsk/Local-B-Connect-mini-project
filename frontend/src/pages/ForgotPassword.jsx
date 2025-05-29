import React, { useState } from "react";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [stage, setStage] = useState(1);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/forgot-password", { email });
    setStage(2);
    alert("OTP sent to your email");
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/reset-password", {
      email,
      otp,
      newPassword,
    });
    alert(res.data.message);
    window.location.href = "/login";
  };

  return (
    <div className="container mt-5">
      <h3>Forgot Password</h3>
      {stage === 1 ? (
        <form onSubmit={handleEmailSubmit}>
          <input
            className="form-control mb-3"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn btn-primary">Send OTP</button>
        </form>
      ) : (
        <form onSubmit={handleResetSubmit}>
          <input
            className="form-control mb-2"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <input
            className="form-control mb-2"
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button className="btn btn-success">Reset Password</button>
        </form>
      )}
    </div>
  );
}

export default ForgotPassword;
