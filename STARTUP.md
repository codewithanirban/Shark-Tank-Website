# Shark Tank Platform - Startup Guide

## Quick Start

### Option 1: Using Batch Files (Windows)
1. **Start Backend**: Double-click `start-backend.bat`
2. **Start Frontend**: Double-click `start-frontend.bat` (in a new terminal)

### Option 2: Manual Startup

#### 1. Start Backend (Terminal 1)
```bash
cd Backend
.\mvnw.cmd spring-boot:run
```
- Wait for "Started SharkTankApplication" message
- Backend will be running on http://localhost:8000

#### 2. Start Frontend (Terminal 2)
```bash
cd Frontend
npm start
```
- Frontend will open automatically in browser
- Running on http://localhost:3000

## Database Setup

### Prerequisites
- MySQL 8.0+ installed and running
- MySQL user with create database privileges

### Steps
1. **Start MySQL service**
2. **Create database**:
   ```sql
   CREATE DATABASE shark_tank;
   ```
3. **Update credentials** in `Backend/src/main/resources/application.properties`:
   ```properties
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

## First Run

1. **Access the application**: http://localhost:3000
2. **Register a new account**:
   - Choose role: ENTREPRENEUR, INVESTOR, or ADMIN
   - Fill in your details
3. **Login** with your credentials
4. **Navigate** to your role-specific dashboard

## Troubleshooting

### Backend Issues
- **Port 8000 in use**: Change port in `application.properties`
- **Database connection failed**: Check MySQL service and credentials
- **Compilation errors**: Run `.\mvnw.cmd clean compile`

### Frontend Issues
- **Port 3000 in use**: React will automatically suggest another port
- **Dependencies missing**: Run `npm install` in Frontend directory
- **Build errors**: Check browser console for JavaScript errors

### Common Problems
1. **CORS errors**: Ensure backend is running on port 8000
2. **API calls failing**: Check backend logs for errors
3. **Page not loading**: Verify both services are running

## Development

### Backend Development
- **Hot reload**: Maven Spring Boot DevTools enabled
- **Logs**: Check terminal output for detailed logs
- **Database**: JPA will auto-create tables on first run

### Frontend Development
- **Hot reload**: React development server enabled
- **Console**: Check browser developer tools for errors
- **State**: User data stored in localStorage

## API Testing

### Test Backend Health
```bash
curl http://localhost:8000/api/users/
```

### Test Frontend
- Open http://localhost:3000
- Check browser console for any errors
- Verify all pages load correctly

## Stopping Services

### Backend
- Press `Ctrl+C` in backend terminal
- Or close the terminal window

### Frontend
- Press `Ctrl+C` in frontend terminal
- Or close the terminal window

## Next Steps

After successful startup:
1. **Create test users** for each role
2. **Test authentication** flow
3. **Explore dashboards** for each user type
4. **Add business logic** as needed

## Support

If you encounter issues:
1. Check this guide first
2. Review terminal logs
3. Check browser console
4. Verify database connectivity
5. Ensure all prerequisites are met
