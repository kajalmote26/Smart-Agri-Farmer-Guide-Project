package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.ShopRepository;
import com.app.dao.UserRepository;
import com.app.dao.VehicleRepository;
import com.app.pojos.HelloBean;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/test")

public class TestController {
	@Autowired 
	private UserRepository userRepository;
	
	@Autowired
	private ShopRepository shopRepository;
	
	@Autowired
	private VehicleRepository vehicleRepository;
	
	@GetMapping("/{name}")
	public HelloBean testMe(@PathVariable String name) {
		//un comment below line to test error handling flow with fron end
	//	throw new RuntimeException("Some error");
		Long id=userRepository.getIdByName(name);
		return new HelloBean(id);
	}
	
	@GetMapping("/shops/{licenseNo}")
	public HelloBean testLicense(@PathVariable String licenseNo) {
		//un comment below line to test error handling flow with fron end
	//	throw new RuntimeException("Some error");
		Long id=shopRepository.getIdByLicense(licenseNo);
		return new HelloBean(id);
	}
	@GetMapping("/vehicle/{licenseNo}")
	public HelloBean testVehicleLicense(@PathVariable String licenseNo) {
		//un comment below line to test error handling flow with fron end
	//	throw new RuntimeException("Some error");
		Long id=vehicleRepository.getVehicleIdByLicense(licenseNo);
		return new HelloBean(id);
	}
	
	
}
