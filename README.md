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

git clone https://github.com/sumanthkumarsk/Local-B-Connect-mini-project.git
cd Local-B-Connect-mini-project 

2. **configue .env file**

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

3. **In one terminal**
cd frontend
npm run dev

4. **In another terminal**
cd backend
npm start


### Snapshots
![Screenshot 2025-05-29 083126](https://github.com/user-attachments/assets/09598a1b-4106-4fb7-a7c2-4988380e6948)

![Screenshot 2025-05-29 083213](https://github.com/user-attachments/assets/a8bd0c86-e1f6-40dc-9055-416decad8de2)

![Screenshot 2025-05-29 083351](https://github.com/user-attachments/assets/c010363b-fea1-4765-9b9c-d54d3db6c221)

![Screenshot 2025-05-29 083428](https://github.com/user-attachments/assets/677323e9-eb0e-46e7-8e8c-ef5ab04de372)

![Screenshot 2025-05-29 083437](https://github.com/user-attachments/assets/2e33dfbd-73bd-46a2-b1ca-e1732506fd9e)

![Screenshot 2025-05-29 083536](https://github.com/user-attachments/assets/51262df2-b13d-4cd7-a1a6-03b1d44049da)

![Screenshot 2025-05-29 083545](https://github.com/user-attachments/assets/ef233296-c54d-4312-9a30-2e5a9bd3efbf)

![Screenshot 2025-05-29 083557](https://github.com/user-attachments/assets/74d6d026-d6c5-48be-b38e-d4e63525aea1)

![Screenshot 2025-05-29 083632](https://github.com/user-attachments/assets/87a2a3ab-1075-4bb9-a2ce-1b8ea00dfb1d)

![Screenshot 2025-05-29 083751](https://github.com/user-attachments/assets/f45b7908-2ace-43ba-ab82-8181f480698b)

![Screenshot 2025-05-29 083827](https://github.com/user-attachments/assets/10cea01d-dba2-4b52-a22e-e87ebb91ca76)

![Screenshot 2025-05-29 083852](https://github.com/user-attachments/assets/91e6d273-6f9d-40fd-85d6-602e48f2000f)

![Screenshot 2025-05-29 083938](https://github.com/user-attachments/assets/75d3c3e8-a6bd-4336-b937-0db869a9d2ae)

![Screenshot 2025-05-29 083950](https://github.com/user-attachments/assets/b9070012-4c29-41be-9b25-bb712bb9f30d)





