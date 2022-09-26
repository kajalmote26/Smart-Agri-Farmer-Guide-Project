package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.UserRepository;
import com.app.exception_handler.ResourceNotFoundException1;
import com.app.pojos.Vehicle;
import com.app.service.VehicleService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class VehicleController
{
	@Autowired
	private VehicleService vehicleService;
	
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/users/{userId}/vehicles")
	public ResponseEntity<Vehicle> addvehicle(@PathVariable(value = "userId") Long userId,@RequestBody Vehicle vehicleRequest)
	{
		Vehicle vehicle = userRepository.findById(userId).map(user -> 
		{
			vehicleRequest.setUser(user);
		      return vehicleService.save(vehicleRequest);
	    })
		.orElseThrow(() -> new ResourceNotFoundException1("Not found User with id = " + userId));
	    return new ResponseEntity<>(vehicle, HttpStatus.CREATED);
	}
	
	@GetMapping("/vehicleslist")
	public List<Vehicle> fetchVehiclesList()
	{
		return vehicleService.getAllVehicles();
	}
	
	@PutMapping("/vehicles/{id}")
	ResponseEntity<Vehicle>  updateVehicle(@RequestBody Vehicle vehicle,@PathVariable("id") Long vehicleId)
	{
		Optional<Vehicle> vehicleData = vehicleService.getVehicleById(vehicleId);
		if (vehicleData.isPresent()) {
			Vehicle vehicle1 = vehicleData.get();
			vehicle1.setDriverFname(vehicle.getDriverFname());
			vehicle1.setDriverLname(vehicle.getDriverLname());
			vehicle1.setVehicleNo(vehicle.getVehicleNo());
			vehicle1.setContact(vehicle.getContact());
			vehicle1.setLicenseNo(vehicle.getLicenseNo());
			vehicle1.setVillage(vehicle.getVillage());
			vehicle1.setTaluka(vehicle.getTaluka());
			vehicle1.setDistrict(vehicle.getDistrict());
			vehicle1.setCapacity(vehicle.getCapacity());
			vehicle1.setRatePerKm(vehicle.getRatePerKm());
			
			return new ResponseEntity<>(vehicleService.save(vehicle1), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/vehicles/{id}")
	public String deleteVehicleById(@PathVariable("id")Long vehicleId)
	{
		vehicleService.deleteVehicleById(vehicleId);
		return "Deleted Successfully";
	}
	
	@GetMapping("/vehicles/{id}")
	 public ResponseEntity<Vehicle> getVehicleById(@PathVariable("id") long id) 
	 {
		Vehicle vehicle = vehicleService.getVehicleById(id).orElseThrow(() -> new ResourceNotFoundException1("Not found Vehicle with id = " + id));
		  return new ResponseEntity<>(vehicle, HttpStatus.OK);
	 }
	
	@GetMapping("/driverlist/{taluka}")
	public List<Vehicle> getVehicleListByTaluka(@PathVariable("taluka") String taluka)
	{
		return vehicleService.getVehicleListByTaluka(taluka);
	}
	
	@GetMapping("/vehicle/{licenseNo}")
	public Long getVehicleIdByLicense(@PathVariable("licenseNo") String licenseNo)
	{
		return vehicleService.getVehicleIdByLicense(licenseNo);
	}
}
