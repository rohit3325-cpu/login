#  Task

A full-stack **MERN** (MongoDB, Express, React, Node.js) Task Manager application with authentication, JWT-based protected routes, and a responsive frontend built with **Vite** and **Tailwind CSS**. Users can register, login, and manage their tasks (create, update, delete, mark as completed).

---

## 🚀 Features

- User registration and login with JWT authentication
- Protected routes for user dashboards
- Create, read, update, and delete tasks
- Responsive UI using Tailwind CSS
- Axios setup for API requests
- Context API for authentication state management

---

## 📁 Project Structure

mern-task-manager/
│
├── backend/
│ ├── server.js
│ ├── .env
│ ├── package.json
│ ├── config/
│ │ └── db.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── models/
│ │ ├── User.js
│ │ └── Task.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ └── taskRoutes.js
│ └── controllers/
│ ├── authController.js
│ └── taskController.js
│
└── frontend/
├── package.json
├── vite.config.js
└── src/
├── App.jsx
├── main.jsx
├── components/
│ ├── Navbar.jsx
│ └── TaskCard.jsx
├── pages/
│ ├── Home.jsx
│ ├── Login.jsx
│ ├── Register.jsx
│ └── Dashboard.jsx
├── context/
│ └── AuthContext.jsx
└── utils/
└── axios.js

yaml
Copy code

---

## ⚡ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Axios, React Router
- **Backend:** Node.js, Express, MongoDB (Atlas or local)
- **Authentication:** JWT + Context API
- **Development:** Nodemon, Postman for API testing

---

## 🛠 Installation

### 1. Backend

```bash
cd backend
npm install
Create a .env file:

env
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=supersecretjwt
PORT=5000
Start the server:

bash
Copy code
npm run dev
The backend runs at:

bash
Copy code
http://localhost:5000/api
2. Frontend
bash
Copy code
cd ../frontend
npm install
Update Axios base URL in src/utils/axios.js:

javascript
Copy code
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api" // Replace with deployed backend URL if needed
});
Start the frontend dev server:

bash
Copy code
npm run dev
Open your browser at:

arduino
Copy code
http://localhost:5173
📝 Usage
Open the app in your browser.

Register a new user.

Login with your credentials.

Add tasks in the dashboard.

Mark tasks as completed or delete them.

🌐 Deployment
Backend can be deployed to platforms like Render, Railway, or Vercel (Node.js).

Frontend can be deployed to Vercel, Netlify, or GitHub Pages (Vite).

Update the baseURL in axios.js to point to the deployed backend.

