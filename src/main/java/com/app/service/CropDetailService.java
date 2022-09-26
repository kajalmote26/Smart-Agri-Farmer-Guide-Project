
package com.app.service;
// Importing required classes
import java.util.List;
import java.util.Optional;

import com.app.pojos.CropDetail;

// Interface
public interface CropDetailService
{
	// Save operation
	CropDetail save(CropDetail cropDetails);
	// Read operation
	List<CropDetail> fetchCropDetailsList();
	// Update operation
	CropDetail updateCropDetail(CropDetail cropDetail,Long cropDetailId);
	// Delete operation
	void deleteCropDetailById(Long cropDetailId);
	Optional<CropDetail> getCropDetailById(Long id);
	
}
