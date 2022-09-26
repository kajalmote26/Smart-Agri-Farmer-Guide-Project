package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.pojos.Vehicle;

public interface VehicleService
{
	Vehicle save(Vehicle vehicle);
	List<Vehicle> getAllVehicles();
	Vehicle updateVehicle(Vehicle vehicle,Long id);
	void deleteVehicleById(Long id);
	Optional<Vehicle> getVehicleById(Long id);
	List<Vehicle> getVehicleListByTaluka(String taluka);
	Long getVehicleIdByLicense(String licenseNo);
}
