package com.code.st.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.code.st.models.Users;
import com.code.st.services.IUsersService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class UsersController {

	@Autowired
	private IUsersService userService;

	@GetMapping("/")
	public ResponseEntity<List<Users>> getAllUsers() {
		try {
			List<Users> users = userService.getAll();
			return ResponseEntity.ok(users);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<Users> getUserById(@PathVariable int id) {
		try {
			Users user = userService.getUserById(id);
			if (user != null) {
				return ResponseEntity.ok(user);
			} else {
				return ResponseEntity.notFound().build();
			}
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	@PostMapping("/create")
	public ResponseEntity<?> createUser(@RequestBody Users user) {
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
				.body("Failed to create user: " + e.getMessage());
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> updateUser(@PathVariable int id, @RequestBody Users user) {
		try {
			user.setUser_id(id);
			Users updatedUser = userService.updateUsers(user);
			return ResponseEntity.ok(updatedUser);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
				.body("Failed to update user: " + e.getMessage());
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable int id) {
		try {
			String result = userService.deleteUsers(id);
			return ResponseEntity.ok(result);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
				.body("Failed to delete user: " + e.getMessage());
		}
	}
}
