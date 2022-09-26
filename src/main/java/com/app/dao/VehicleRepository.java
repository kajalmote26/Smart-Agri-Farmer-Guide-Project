package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Vehicle;

public interface VehicleRepository extends JpaRepository<Vehicle, Long>
{
	@Query("select v from Vehicle v where v.taluka=:taluka")
	public List<Vehicle> findByTaluka(@Param("taluka") String taluka);
	
	@Query("select v.id from Vehicle v where v.licenseNo=:licenseNo")
	Long getVehicleIdByLicense(@Param("licenseNo")String licenseNo);
}
