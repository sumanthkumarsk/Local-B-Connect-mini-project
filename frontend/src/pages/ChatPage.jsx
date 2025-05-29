import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:5000");

function ChatPage({ currentUserId, selectedUserId }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    socket.emit("join", currentUserId);

    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socket.off("receiveMessage");
  }, [currentUserId]);

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await axios.get(`http://localhost:5000/api/chat/${currentUserId}/${selectedUserId}`);
      setMessages(res.data);
    };
    fetchMessages();
  }, [currentUserId, selectedUserId]);

  const sendMessage = () => {
    if (text.trim()) {
      const message = { sender: currentUserId, receiver: selectedUserId, text };
      socket.emit("sendMessage", message);
      setMessages((prev) => [...prev, message]);
      setText("");
    }
  };

  return (
    <div className="container mt-4">
      <h4>Chat with Provider/User</h4>
      <div className="border p-3 mb-2" style={{ height: "300px", overflowY: "scroll" }}>
        {messages.map((m, idx) => (
          <div key={idx} className={`text-${m.sender === currentUserId ? "end" : "start"}`}>
            <span className="badge bg-secondary">{m.text}</span>
          </div>
        ))}
      </div>
      <div className="input-group">
        <input
          className="form-control"
          placeholder="Type message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-primary" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatPage;
