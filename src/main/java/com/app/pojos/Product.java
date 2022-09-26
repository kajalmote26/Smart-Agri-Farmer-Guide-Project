package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor	
@Table(name = "products")
public class Product extends BaseEntity
{
	@Column(nullable = false)
	private String productName;	
	@Column(nullable = false)
	private String categoryName;
	@Column(nullable = false)
	private Double productPrice;
	
	@ManyToOne(optional = false)
	@JoinColumn(name = "shop_id", nullable = false)	
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JsonIgnore
	private Shop shop;	
}