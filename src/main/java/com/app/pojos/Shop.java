package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "shops", uniqueConstraints = {@UniqueConstraint(columnNames = "licenseNo"),
		@UniqueConstraint(columnNames = "contact")})
public class Shop extends BaseEntity
{
	@Column(nullable = false)
	private String shopName;
	@Column(nullable = false)
	private String ownerName;
	@Column(nullable = false)
	private String licenseNo;
	@Column(nullable = false)
	private String district;
	@Column(nullable = false)
	private String taluka;
	@Column(nullable = false)
	private String village;
	@Column(nullable = false,unique = true)
	private Long contact;
	@Column(nullable=false)
	private float rating;
	
	@OneToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "user_id", nullable = false)	
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JsonIgnore
	private User user;
}