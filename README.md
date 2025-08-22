# Shark Tank Platform

A full-stack web application that connects entrepreneurs with investors, built with React frontend and Spring Boot backend.

## Features

- **User Authentication**: Login/Register system with role-based access
- **Entrepreneur Dashboard**: Create and manage business pitches
- **Investor Dashboard**: Browse pitches and make investment offers
- **Admin Panel**: User management and system overview
- **Responsive Design**: Modern UI that works on all devices

## Tech Stack

### Frontend
- React 19.1.0
- React Router DOM 7.6.0
- CSS3 with responsive design

### Backend
- Spring Boot 3.4.4
- Spring Data JPA
- MySQL Database
- Maven

## Prerequisites

- Java 17 or higher
- Node.js 16 or higher
- MySQL 8.0 or higher
- Maven 3.6 or higher

## Setup Instructions

### 1. Database Setup

1. Create a MySQL database named `shark_tank`
2. Update database credentials in `Backend/src/main/resources/application.properties`

### 2. Backend Setup

1. Navigate to the Backend directory:
   ```bash
   cd Backend
   ```

2. Build the project:
   ```bash
   mvn clean install
   ```

3. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```

The backend will start on `http://localhost:8000`

### 3. Frontend Setup

1. Navigate to the Frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend will start on `http://localhost:3000`

## API Endpoints

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

## User Roles

- **ADMIN**: System administration and user management
- **ENTREPRENEUR**: Create and manage business pitches
- **INVESTOR**: Browse pitches and make investment offers

## Project Structure

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
└── README.md
```

## Development

### Adding New Features

1. **Backend**: Add new models, services, and controllers as needed
2. **Frontend**: Create new components and pages in the appropriate directories
3. **Database**: Update entities and run migrations if needed

### Code Style

- Follow Java naming conventions for backend code
- Use camelCase for JavaScript/React code
- Maintain consistent indentation and formatting

## Troubleshooting

### Common Issues

1. **Database Connection**: Ensure MySQL is running and credentials are correct
2. **Port Conflicts**: Check if ports 8000 (backend) and 3000 (frontend) are available
3. **CORS Issues**: Backend CORS is configured for `http://localhost:3000`

### Logs

- Backend logs are available in the console when running with Maven
- Frontend errors appear in the browser console

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or issues, please create an issue in the repository.