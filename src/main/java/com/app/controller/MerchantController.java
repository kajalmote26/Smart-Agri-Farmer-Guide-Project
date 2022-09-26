
package com.app.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

// Importing required classes
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

import com.app.pojos.Merchant;
import com.app.service.MerchantService;

// Annotation
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
// Class
public class MerchantController 
{
	// Annotation
	@Autowired
	private MerchantService merchantService;

	// Save operation
	@PostMapping("/merchants")
	public Merchant saveMerchant(@Valid @RequestBody Merchant merchant)
	{
		return merchantService.saveMerchant(merchant);
	}

	// Read operation
	@GetMapping("/merchants")
	public List<Merchant> fetchMerchantsList()
	{
		return merchantService.fetchMerchantsList();
	}

	// Update operation
	@PutMapping("/merchants/{id}")
	ResponseEntity<Merchant>  updateMerchant(@RequestBody Merchant merchant,@PathVariable("id") Long merchantId)
	{
		Optional<Merchant> merchantdata = merchantService.getMerchantById(merchantId);
		if (merchantdata.isPresent()) {
			Merchant merchant1 = merchantdata.get();
			merchant1.setMerchantName(merchant.getMerchantName());
			merchant1.setMarketName(merchant.getMarketName());
			merchant1.setCity(merchant.getCity());
			merchant1.setContact(merchant.getContact());
			return new ResponseEntity<>(merchantService.saveMerchant(merchant1), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		//return merchantService.updateMerchant(merchant, merchantId);
	}

	// Delete operation
	@DeleteMapping("/merchants/{id}")
	public String deleteMerchantById(@PathVariable("id")Long merchantId)
	{
		merchantService.deleteMerchantById(merchantId);
		return "Deleted Successfully";
	}
	
	@GetMapping("/merchantlist/{city}")
	public List<Merchant> getMerchantListByCity(@PathVariable("city") String city)
	{
		return merchantService.getMerchantListByCity(city);
	}
	@GetMapping("/merchants/{id}")
	public Optional<Merchant> getMerchantById(@PathVariable("id") Long id)
	{
		return merchantService.getMerchantById(id);
	}
}
