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
@Table(name="diseases")
public class Diseases extends BaseEntity
{
	@Column(nullable = false)
	private String cropName;
	@Column(length = 255,unique = true,nullable = false)
	private String diseaseName;
	@Column(columnDefinition = "TEXT",nullable = false)
	private String diseaseInfo;
	@Column(length = 255,unique = true,nullable = false)
	private String pesticide;
	@Column(columnDefinition = "TEXT",nullable = false)
	private String plantProtection;
}