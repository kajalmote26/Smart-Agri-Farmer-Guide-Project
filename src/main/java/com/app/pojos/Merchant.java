package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name="merchants")
public class Merchant extends BaseEntity
{
	@Column(length = 50)
	private String merchantName;
	@Column(length = 50)
	private String marketName;
	@Column(length = 50)
	private String city;
	@Column(length = 50,unique = true)
	private long contact;
}
