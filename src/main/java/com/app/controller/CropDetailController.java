
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

import com.app.pojos.CropDetail;
import com.app.service.CropDetailService;

// Annotation
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
// Class
public class CropDetailController 
{
	// Annotation
	@Autowired 
	private CropDetailService cropDetailService;

	// Save operation
	@PostMapping("/cropdetail")
	public CropDetail saveCropDetail(@Valid @RequestBody CropDetail cropDetail)
	{
		return cropDetailService.save(cropDetail);
	}

	// Read operation
	@GetMapping("/cropdetailslist")
	public List<CropDetail> fetchCropDetailsList()
	{
		return cropDetailService.fetchCropDetailsList();
	}

	// Update operation
//	
	@PutMapping("/cropdetail/{id}")
	ResponseEntity<CropDetail>  updateCropDetail(@RequestBody CropDetail cropDetail,@PathVariable("id") Long id)
	{
		Optional<CropDetail> cropDetailData = cropDetailService.getCropDetailById(id);
		if (cropDetailData.isPresent()) {
			CropDetail cropDetail1 = cropDetailData.get();
			cropDetail1.setCropName(cropDetail.getCropName());
			cropDetail1.setCropType(cropDetail.getCropType());
			cropDetail1.setCropInfo(cropDetail.getCropInfo());
			cropDetail1.setPlantationInfo(cropDetail.getPlantationInfo());
			cropDetail1.setPhase1(cropDetail.getPhase1());
			cropDetail1.setPhase2(cropDetail.getPhase2());
			cropDetail1.setPhase3(cropDetail.getPhase3());
			cropDetail1.setPhase4(cropDetail.getPhase4());
			return new ResponseEntity<>(cropDetailService.save(cropDetail1), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

	// Delete operation
	@DeleteMapping("/cropdetail/{id}")
	public String deleteCropDetailById(@PathVariable("id")Long cropDetailId)
	{
		cropDetailService.deleteCropDetailById(cropDetailId);
		return "Deleted Successfully";
	}
	
	@GetMapping("/cropdetail/{id}")
	public Optional<CropDetail> getById(@PathVariable("id") Long id)
	{
		return cropDetailService.getCropDetailById(id);
	}
}
