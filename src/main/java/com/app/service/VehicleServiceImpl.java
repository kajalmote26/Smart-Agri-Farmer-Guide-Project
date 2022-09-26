package com.app.service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.VehicleRepository;
import com.app.pojos.Vehicle;

@Service
@Transactional
public class VehicleServiceImpl implements VehicleService
{
	@Autowired
	private VehicleRepository vehicleRepository;
	
	@Override
	public Vehicle save(Vehicle vehicle) 
	{
		return vehicleRepository.save(vehicle);
	}

	@Override
	public List<Vehicle> getAllVehicles()
	{
		return vehicleRepository.findAll();
	}

	@Override
	public Vehicle updateVehicle(Vehicle vehicle,Long id)
	{
		Vehicle vehicledb= vehicleRepository.findById(id).get();
		if (Objects.nonNull(vehicle.getDriverFname())&& !"".equalsIgnoreCase(vehicle.getDriverFname()))
		{
			vehicledb.setDriverFname(vehicle.getDriverFname());
		}
		if (Objects.nonNull(vehicle.getDriverLname())&& !"".equalsIgnoreCase(vehicle.getDriverLname())) 
		{
			vehicledb.setDriverLname(vehicle.getDriverLname());
		}
		if (Objects.nonNull(vehicle.getLicenseNo())&& !"".equalsIgnoreCase(vehicle.getLicenseNo())) 
		{
			vehicledb.setLicenseNo(vehicle.getLicenseNo());
		}
		if (Objects.nonNull(vehicle.getDistrict())&& !"".equalsIgnoreCase(vehicle.getDistrict())) 
		{
			vehicledb.setDistrict(vehicle.getDistrict());
		}
		
		if (Objects.nonNull(vehicle.getTaluka())&& !"".equalsIgnoreCase(vehicle.getTaluka()))
		{
			vehicledb.setTaluka(vehicle.getTaluka());
		}
		
		if (Objects.nonNull(vehicle.getVillage())&& !"".equalsIgnoreCase(vehicle.getVillage()))
		{
			vehicledb.setVillage(vehicle.getVillage());
		}
		if (Objects.nonNull(vehicle.getVehicleNo())&& !"".equalsIgnoreCase(vehicle.getVehicleNo())) 
		{
			vehicledb.setVehicleNo(vehicle.getVehicleNo());
		}
		if (Objects.nonNull(vehicle.getCapacity()))
		{
			vehicledb.setCapacity(vehicle.getCapacity());
		}
		if (Objects.nonNull(vehicle.getRatePerKm())) 
		{
			vehicledb.setRatePerKm(vehicle.getRatePerKm());
		}
		return vehicleRepository.save(vehicledb);
	}

	@Override
	public void deleteVehicleById(Long id) 
	{
		vehicleRepository.deleteById(id);
	}

	@Override
	public Optional<Vehicle> getVehicleById(Long id)
	{
		return vehicleRepository.findById(id);
	}

	@Override
	public List<Vehicle> getVehicleListByTaluka(String taluka)
	{
		return vehicleRepository.findByTaluka(taluka);
	}

	@Override
	public Long getVehicleIdByLicense(String licenseNo)
	{
		return vehicleRepository.getVehicleIdByLicense(licenseNo);
	}

}
