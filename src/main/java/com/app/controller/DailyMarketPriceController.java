
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

import com.app.pojos.DailyMarketPrice;
import com.app.service.DailyMarketPriceService;

// Annotation
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
// Class
public class DailyMarketPriceController {

	// Annotation
	@Autowired private DailyMarketPriceService dailyMarketPriceService;

	// Save operation
	@PostMapping("/dailyprice")
	public DailyMarketPrice saveDailyMarketPrice(
		@Valid @RequestBody DailyMarketPrice dailyMarketPrice)
	{
		return dailyMarketPriceService.saveDailyMarketPrice(dailyMarketPrice);
	}

	// Read operation
	@GetMapping("/dailyprice")
	public List<DailyMarketPrice> fetchDailyMarketPricesList()
	{
		return dailyMarketPriceService.fetchDailyMarketPricesList();
	}
	
	// Update operation
		@PutMapping("/dailyprice/{id}")
		ResponseEntity<DailyMarketPrice>  updateDailyRates(@RequestBody DailyMarketPrice dailyMarketPrice,@PathVariable("id") Long id)
		{
			Optional<DailyMarketPrice> dailyMarketPriceData = dailyMarketPriceService.getDailyRatesById(id);
			if (dailyMarketPriceData.isPresent()) {
				DailyMarketPrice dailyMarketPrice1 = dailyMarketPriceData.get();
				dailyMarketPrice1.setCrop_Name(dailyMarketPrice.getCrop_Name());
				dailyMarketPrice1.setCropType(dailyMarketPrice.getCropType());
				dailyMarketPrice1.setQuantity(dailyMarketPrice.getQuantity());
				dailyMarketPrice1.setMinPrice(dailyMarketPrice.getMinPrice());
				dailyMarketPrice1.setMaxPrice(dailyMarketPrice.getMaxPrice());
				dailyMarketPrice1.setLocation(dailyMarketPrice.getLocation());
				dailyMarketPrice1.setCdate(dailyMarketPrice.getCdate());
				return new ResponseEntity<>(dailyMarketPriceService.saveDailyMarketPrice(dailyMarketPrice1), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}

			//return merchantService.updateMerchant(merchant, merchantId);
		}

//	// Delete operation
	@DeleteMapping("/dailyprice/{id}")
	public String deleteDailyRatesById(@PathVariable("id")
									Long dailyRatesId)
	{
		dailyMarketPriceService.deleteDailyMarketPriceById(
				dailyRatesId);
		return "Deleted Successfully";
	}
	
	//GetMappig By Date
//	@GetMapping("/dailyprice/{cdate}")
//	public List<DailyMarketPrice> findByDate(@PathVariable("cdate") String cdate)
//	{
//		return dailyMarketPriceService.findByDate(cdate);
//	}
	
	@GetMapping("/dailyprice/{id}")
	public Optional<DailyMarketPrice> getDailyRatesById(@PathVariable("id") Long id)
	{
		return dailyMarketPriceService.getDailyRatesById(id);
	}
}
