package com.app.service;

import java.util.List;

import com.app.dto.SignUpRequest;
import com.app.dto.UserResponseDTO;
import com.app.pojos.User;

//Nothing to do with spring security : it's job currently is user registration
public interface IUserService
{
	UserResponseDTO registerUser(SignUpRequest request);
	
	List<User> getAll();
	Long getIdByName(String userName);
	
}
