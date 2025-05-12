package com.code.st.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.st.models.Users;
import com.code.st.repositories.IUsersRepositories;

@Service
public class UsersService implements IUsersService {
	
	@Autowired
	IUsersRepositories usersrepositories;
	
	@Override
	public Users createUsers(Users user) {
		// TODO Auto-generated method stub
		return usersrepositories.save(user);
	}

	@Override
	public Users updateUsers(Users user) {
		// TODO Auto-generated method stub
		return usersrepositories.save(user);
	}

	@Override
	public String deleteUsers(Users user) {
		// TODO Auto-generated method stub
		usersrepositories.delete(user);
		return "User is deleted Successfully";
	}

	@Override
	public String deleteUsers(int id) {
		// TODO Auto-generated method stub
		Optional<Users> u=	usersrepositories.findById(id);
		//check the object is found or not
		Users user=null;
		if(u.isPresent())
		{
			//get the user object
			user=u.get();
			//delete the user object
			usersrepositories.delete(user);
			return "User is deleted Successfully";
		}
		return "User is not found with ID:"+ id;
	}

	@Override
	public Users getUserById(int id) {
		// TODO Auto-generated method stub
		return (Users)usersrepositories.findById(id).get();
	}

	@Override
	public List<Users> getAll() {
		// TODO Auto-generated method stub
		return usersrepositories.findAll();
	}

	@Override
	public Users validateUsers(String emailid, String password) {
		// TODO Auto-generated method stub
		Users user=usersrepositories.findByEmailid(emailid);
		if(user!=null)
		{
			if(user.getPassword().equals(password))
			{
				return user;
			}
		}
		System.out.println("User not found or password did not match!");
		return null;
	}

}
