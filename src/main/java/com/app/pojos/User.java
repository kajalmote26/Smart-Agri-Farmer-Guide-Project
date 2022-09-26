package com.app.pojos;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
public class User extends BaseEntity
{
	@Column(length = 30,unique = true,nullable = false)
	private String userName;
	@Column(length = 30, unique = true,nullable = false)
	private String email;
	@Column(length = 300,nullable = false)//larger length required for encrypted passwords
	private String password;
	
	@ManyToMany
	@JoinTable(name = "user_roles", 
	joinColumns = @JoinColumn(name = "user_id", nullable = false), 
	inverseJoinColumns = @JoinColumn(name = "role_id", nullable = false))
	private Set<Role> roles = new HashSet<>();	
	
	
//	@ManyToOne(fetch = FetchType.LAZY, optional = false)
//	@JoinColumn(name = "role_id", nullable = false)	
//	@OnDelete(action = OnDeleteAction.CASCADE)
//	@JsonIgnore
//	private Role roles;	
}

