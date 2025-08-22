package com.code.st.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.code.st.models.Users;
import com.code.st.services.IUsersService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class AuthController {

    @Autowired
    private IUsersService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            Users user = userService.validateUsers(request.getEmailid(), request.getPassword());
            if (user != null) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid email or password");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Login failed: " + e.getMessage());
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Users user) {
        try {
            // Check if user already exists
            Users existingUser = userService.getUserByEmail(user.getEmailid());
            if (existingUser != null) {
                return ResponseEntity.badRequest()
                    .body("User with this email already exists");
            }
            
            Users newUser = userService.createUsers(user);
            return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Registration failed: " + e.getMessage());
        }
    }

    // Inner class for request body
    static class LoginRequest {
        private String emailid;
        private String password;

        // Getters and setters
        public String getEmailid() { return emailid; }
        public void setEmailid(String emailid) { this.emailid = emailid; }
        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
    }
}