# 🦈 Shark Tank Website

Welcome to the **Shark Tank Website**, a dynamic platform inspired by the legendary show "Shark Tank", where entrepreneurs pitch their big ideas to real investors. 🚀

Whether you're a startup seeking funding 💸 or a shark looking for the next big opportunity 🧠 — this site brings the pitch room to your screen.

---

## 🔥 Features

- 👤 **User Authentication**: Login/Register system with role-based access
- 📜 **Create & Manage Pitches**: Entrepreneurs can create and manage business pitches
- 💼 **View & Accept Investment Offers**: Investors can browse pitches and make offers
- 📊 **Role-Based Dashboards**: Customized interfaces for Entrepreneurs, Investors, and Admins
- 💬 **Real-time Interaction Simulation**: Platform for investor-startup connections
- 🎨 **Responsive Design**: Modern UI that works on all devices

---

## 🛠️ Tech Stack

| Frontend | Backend | Database | Build Tools |
|----------|---------|----------|-------------|
| React.js 19.1.0 | Java Spring Boot 3.4.4 | MySQL 8.0+ | Maven, npm |

---

## 🚀 Getting Started

### Prerequisites

- Java 17 or higher
- Node.js 16 or higher
- MySQL 8.0 or higher
- Maven 3.6 or higher

### 1. Clone the repo
```bash
git clone https://github.com/codewithanirban/Shark-Tank-Website.git
cd Shark-Tank-Website
```

### 2. Database Setup
1. Start MySQL service
2. Create database:
   ```sql
   CREATE DATABASE shark_tank;
   ```
3. Update credentials in `Backend/src/main/resources/application.properties`

### 3. Backend (Spring Boot)
```bash
cd Backend
./mvnw spring-boot:run
```
- Backend will start on `http://localhost:8000`
- Wait for "Started SharkTankApplication" message

### 4. Frontend (React.js)
```bash
cd Frontend
npm install
npm start
```
- Frontend will open automatically in browser
- Running on `http://localhost:3000`

---

## 📋 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Users
- `GET /api/users/` - Get all users
- `GET /api/users/{id}` - Get user by ID
- `POST /api/users/create` - Create new user
- `PUT /api/users/{id}` - Update user
- `DELETE /api/users/{id}` - Delete user

### Pitches
- `GET /api/pitches/` - Get all pitches
- `GET /api/pitches/{id}` - Get pitch by ID
- `POST /api/pitches/create` - Create new pitch
- `PUT /api/pitches/{id}` - Update pitch
- `DELETE /api/pitches/{id}` - Delete pitch

### Offers
- `GET /api/offers/` - Get all offers
- `GET /api/offers/{id}` - Get offer by ID
- `POST /api/offers/create` - Create new offer
- `PUT /api/offers/{id}` - Update offer
- `DELETE /api/offers/{id}` - Delete offer

---

## 👥 User Roles

- **🦈 ADMIN**: System administration and user management
- **💡 ENTREPRENEUR**: Create and manage business pitches
- **💰 INVESTOR**: Browse pitches and make investment offers

---

## 🏗️ Project Structure

```
Shark Tank/
├── Backend/                 # Spring Boot application
│   ├── src/main/java/
│   │   └── com/code/st/
│   │       ├── controllers/ # REST API controllers
│   │       ├── models/      # JPA entities
│   │       ├── repositories/# Data access layer
│   │       └── services/    # Business logic
│   └── src/main/resources/
│       └── application.properties
├── Frontend/                # React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── Pages/          # Page components
│   │   └── services/       # API service functions
│   └── public/
├── start-backend.bat        # Windows backend startup script
├── start-frontend.bat       # Windows frontend startup script
├── STARTUP.md               # Detailed startup guide
└── README.md
```

---

## 🎯 Quick Start (Windows)

1. **Start Backend**: Double-click `start-backend.bat`
2. **Start Frontend**: Double-click `start-frontend.bat` (in a new terminal)
3. **Access**: Open http://localhost:3000 in your browser

---

## 🧠 Inspiration

Inspired by the creativity and hustle showcased in **Shark Tank**, this project is built to simulate a real-world investor-startup environment — all online!

---

## 🔧 Development

### Adding New Features
1. **Backend**: Add new models, services, and controllers as needed
2. **Frontend**: Create new components and pages in the appropriate directories
3. **Database**: Update entities and run migrations if needed

### Code Style
- Follow Java naming conventions for backend code
- Use camelCase for JavaScript/React code
- Maintain consistent indentation and formatting

---

## 🚨 Troubleshooting

### Common Issues
1. **Database Connection**: Ensure MySQL is running and credentials are correct
2. **Port Conflicts**: Check if ports 8000 (backend) and 3000 (frontend) are available
3. **CORS Issues**: Backend CORS is configured for `http://localhost:3000`

### Logs
- Backend logs are available in the console when running with Maven
- Frontend errors appear in the browser console

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

* Fork the repo
* Create a new branch
* Submit a pull request

---

## 📄 License

This project is open source under the [MIT License](./LICENSE).

---

## 🙌 Acknowledgements

* The original **Shark Tank** creators
* Open-source community 💖
* Java & React developers who inspired the tech stack

---

Made with 💻 and ☕ by [Anirban](https://github.com/codewithanirban)
