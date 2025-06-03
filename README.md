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

## ## 📁 Project Structure

```
Local-B-Connect/
├── frontend/                     # React Frontend
│   ├── public/                 # Public assets
│   └── src/
│       ├── assets/             # Images, icons
│       ├── components/         # Reusable UI components
│       ├── pages/              # All route-level pages (Login, Signup, Dashboard, etc.)
│       ├── context/            # React context for global state management
│       ├── hooks/              # Custom React hooks
│       ├── services/           # API service functions
│       ├── utils/              # Helper functions
│       ├── App.js              # Root component
│       └── index.js            # Entry point
│
├── backend/                     # Node.js + Express Backend
│   ├── config/                 # DB config, external service keys
│   ├── controllers/            # Route controllers for business logic
│   ├── middleware/             # Auth and error middlewares
│   ├── models/                 # Mongoose models
│   ├── routes/                 # API route definitions
│   ├── utils/                  # Helper functions
│   ├── socket/                 # Socket.io events and handlers
│   ├── server.js               # Main server entry
│   └── .env                    # Environment variables
│
└── README.md                   # Project documentation
```


---

## 🚀 Getting Started

### 🔌 Prerequisites
- Node.js & npm
- MongoDB (local or Atlas)


### 🔄 Setup

1. **Clone the repo**
```bash
git clone https://github.com/sumanthkumarsk/Local-B-Connect-mini-project.git
cd Local-B-Connect-mini-project  ```

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
