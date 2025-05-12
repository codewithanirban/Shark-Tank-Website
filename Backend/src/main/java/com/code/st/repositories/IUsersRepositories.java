package com.code.st.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.code.st.models.Users;

public interface IUsersRepositories extends JpaRepository<Users, Integer> {
	public Users findByEmailid(String emailid);
}
