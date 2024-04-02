package com.org.Blog.payloads;

import java.util.Set;

import com.org.Blog.entity.Role;

import lombok.Data;

@Data

public class JwtAuthRequest {

	private String username;
	private String password;
	private Set<Role> roles;

}