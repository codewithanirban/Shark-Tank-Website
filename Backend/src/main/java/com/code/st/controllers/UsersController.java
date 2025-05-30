package com.code.st.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.code.st.models.Users;
import com.code.st.services.IUsersService;

@RestController
@RequestMapping("api/users/")
public class UsersController {
	//adding the dependency
	@Autowired
	IUsersService userService;
	
	//root path
	@GetMapping(value = "/")
	public List<Users> getAllUsers(){
		return userService.getAll();
	}
	
	@GetMapping(value = "/{id}")
	public Users getUsersById(@PathVariable("id") int id) {
		return userService.getUserById(id);
	}
	
//	@PostMapping(value="login")
//	public Users userLogin(@RequestParam("emailid") String emailid,
//			@RequestParam("password") String password) {
//		return userService.validateUsers(emailid, password);
//	}
	@PostMapping(value="create")
	public Users userCreate(@RequestBody Users users) {
		return userService.createUsers(users);
	}
	
	@PutMapping(value="edit")
	public Users userEdit(@RequestBody Users users) {
		return userService.updateUsers(users);
	}

	@DeleteMapping(value="delete/{id}")
	public String userDelete(@PathVariable("id") int id) {
		return userService.deleteUsers(id);
	}
}
