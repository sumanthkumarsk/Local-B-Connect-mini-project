# 🏙️ Local B Connect – Local Business Service Booking Platform

Local B Connect is a **MERN stack** based web application that connects users with local service providers (e.g., salons, spas, doctors, plumbers, and tutors). The platform enables easy service discovery, real-time booking, live chat, location detection, and secure payments — all wrapped in a sleek and user-friendly interface.

---

## 🔧 Tech Stack

- **Frontend:** React.js, Bootstrap, Axios, Socket.io-client  
- **Backend:** Node.js, Express.js, Socket.io  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** JWT, bcrypt  

---

## ✨ Features

### 👥 Authentication & User Management
- Role-based login/signup (User or Service Provider)
- password encryption

### 🗺️ Service Discovery
- Search by service, category

### 📅 Booking System
- Calendar-based appointment scheduling
- Real-time booking status updates
- Service availability and user notifications


### 🧰 Service Management (Provider Dashboard)
- Add, update, delete services
- View and manage bookings

### 📦 Local Caching & Optimization
- Cache data using localStorage/sessionStorage for speed
- Optimized routing and lazy loading for better performance

---

## 📁 Project Structure
📦 Local-B-Connect/
├── client/ # React frontend
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── utils/
│ └── App.js
├── server/ # Node.js + Express backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
└── README.md


---

## 🚀 Getting Started

### 🔌 Prerequisites
- Node.js & npm
- MongoDB (local or Atlas)


### 🔄 Setup

1. **Clone the repo**
```bash
git clone https://github.com/sumanthkumarsk/Local-B-Connect-mini-project.git
cd Local-B-Connect-mini-project

configue .env file

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

# In one terminal
cd frontend
npm run dev

# In another terminal
cd backend
npm start
