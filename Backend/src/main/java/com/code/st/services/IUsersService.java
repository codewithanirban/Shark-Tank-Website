package com.code.st.services;

import java.util.List;

import com.code.st.models.Users;

public interface IUsersService {
	public Users createUsers(Users user);
	public Users updateUsers(Users user);
	public String deleteUsers(Users user);
	public String deleteUsers(int id);
	public Users getUserById(int id);
	public Users getUserByEmail(String emailid);
	public List<Users> getAll();
	public Users validateUsers(String emailid, String password);
}
