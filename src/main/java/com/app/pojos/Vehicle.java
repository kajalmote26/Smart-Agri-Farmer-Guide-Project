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
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@Table(name = "vehicles", uniqueConstraints = {@UniqueConstraint(columnNames = "licenseNo"),
		@UniqueConstraint(columnNames = "vehicleNo")})
public class Vehicle extends BaseEntity
{
	@Column(nullable = false)
	private String driverFname;
	@Column(nullable = false)
	private String driverLname;
	@Column(length = 30,unique = true,nullable = false)
	private Long contact;
	@Column(nullable = false)
	private String licenseNo;
	@Column(nullable = false)
	private String village;
	@Column(nullable = false)
	private String taluka;
	@Column(nullable = false)
	private String district;
	@Column(nullable = false)
	private String vehicleNo;
//	@Override
//	public int hashCode() {
//		return Objects.hash(user);
//	}
//
//	@Override
//	public boolean equals(Object obj) {
//		if (this == obj)
//			return true;
//		if (obj == null)
//			return false;
//		if (getClass() != obj.getClass())
//			return false;
//		Vehicle other = (Vehicle) obj;
//		return Objects.equals(user, other.user);
//	}

	@Column(nullable = false)
	private Double capacity;
	@Column(nullable = false)
	private Double ratePerKm;
	
	@OneToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "user_id", nullable = false)	
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JsonIgnore
	private User user;
}
