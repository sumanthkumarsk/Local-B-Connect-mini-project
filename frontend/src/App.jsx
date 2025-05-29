import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import UserDashboard from "./pages/UserDashboard";
import ProviderDashboard from "./pages/ProviderDashboard";
import ServiceDetails from "./pages/ServiceDetails";
import ChatPage from "./pages/ChatPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/provider-dashboard" element={<ProviderDashboard />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/chat/:userId" element={<ChatPageWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

// Wrapper to inject currentUserId and selectedUserId into ChatPage
import { useParams } from "react-router-dom";
function ChatPageWrapper() {
  const currentUserId = localStorage.getItem("userId");
  const { userId: selectedUserId } = useParams();
  return <ChatPage currentUserId={currentUserId} selectedUserId={selectedUserId} />;
}

export default App;
