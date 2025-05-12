package com.code.st.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.code.st.models.Users;
import com.code.st.services.IUsersService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private IUsersService userService;

    @PostMapping("/login")
    public Users login(@RequestBody LoginRequest request) {
        return userService.validateUsers(request.getEmailid(), request.getPassword());
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