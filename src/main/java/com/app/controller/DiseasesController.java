
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

import com.app.pojos.Diseases;
import com.app.service.DiseasesService;

// Annotation
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class DiseasesController 
{
	// Annotation
	@Autowired private DiseasesService diseasesService;

	// Save operation
	@PostMapping("/diseases")
	public Diseases saveDiseases(@Valid @RequestBody Diseases diseases)
	{
		return diseasesService.save(diseases);
	}

	// Read operation
	@GetMapping("/diseaselist")
	public List<Diseases> fetchDiseasessList()
	{
		return diseasesService.getAllDiseases();
	}

	
	
	@PutMapping("/diseases/{id}")
	ResponseEntity<Diseases>  updateDiseases(@RequestBody Diseases diseases,@PathVariable("id") Long diseasesId)
	{
		Optional<Diseases> diseasesdata = diseasesService.getById(diseasesId);
		if (diseasesdata.isPresent()) {
			Diseases diseases1 = diseasesdata.get();
			diseases1.setCropName(diseases.getCropName());
			diseases1.setDiseaseName(diseases.getDiseaseName());
			diseases1.setDiseaseInfo(diseases.getDiseaseInfo());
			diseases1.setPesticide(diseases.getPesticide());
			diseases1.setPlantProtection(diseases.getPlantProtection());
			return new ResponseEntity<>(diseasesService.save(diseases1), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		//return merchantService.updateMerchant(merchant, merchantId);
	}

	// Delete operation
	@DeleteMapping("/diseases/{id}")
	public String deleteByDiseaseId(@PathVariable("id")Long id)
	{
		diseasesService.deleteByDiseaseId(id);
		return "Deleted Successfully";
	}
	
//	@GetMapping("/diseases/{diseaseName}")
//	public ResponseEntity<Diseases> findDiseaseByName(@PathVariable("diseaseName") String diseaseName) 
//	 {
//		Diseases disease = diseasesService.getByName(diseaseName).orElseThrow(() -> new ResourceNotFoundException1("Not found Disease with name= " + diseaseName));
//		  return new ResponseEntity<>(disease, HttpStatus.OK);
//	 }
	
	@GetMapping("/diseaseslist/{cropName}")
	public List<Diseases> getDiseasesListByCropName(@PathVariable("cropName") String cropName)
	{
		return diseasesService.getAllDiseasesByCropName(cropName);
	}
	@GetMapping("/diseases/{id}")
	public Optional<Diseases> getDiseasesById(@PathVariable("id") Long id)
	{
		return diseasesService.getById(id);
	}
	 
}
