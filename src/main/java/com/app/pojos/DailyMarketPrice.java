package com.app.pojos;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table(name="dailyprice")
public class DailyMarketPrice extends BaseEntity
{
	
	@Column(length = 200)
	private String crop_Name;
	
	@Column(length = 200)
	private String cropType;
	@Column(length = 100)
	private int quantity;
	@Column(length = 100)
	private double minPrice;
	@Column(length = 100)
	private double maxPrice;
	@Column(length = 100)
	private String location;
	private Date cdate;
	

	public DailyMarketPrice() {
		// TODO Auto-generated constructor stub
	}
}
