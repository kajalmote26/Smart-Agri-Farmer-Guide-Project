
package com.app.service;

// Importing required classes
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CropDetailRepository;
import com.app.pojos.CropDetail;

// Annotation
@Service
@Transactional
// Class
public class CropDetailImpl implements CropDetailService
{
	@Autowired
	private CropDetailRepository cropDetailRepository;
	
	// Save operation
	@Override
	public CropDetail save(CropDetail cropDetails) 
	{
		return cropDetailRepository.save(cropDetails);
	}

	// Read operation
	@Override public List<CropDetail> fetchCropDetailsList()
	{
		return (List<CropDetail>)cropDetailRepository.findAll();
	}

	// Update operation
	@Override
	public CropDetail
	updateCropDetail(CropDetail cropDetail,Long cropDetailId)
	{
		CropDetail cropdb= cropDetailRepository.findById(cropDetailId).get();
		if (Objects.nonNull(cropDetail.getCropName())&& !"".equalsIgnoreCase(cropDetail.getCropName())) 
		{
			cropdb.setCropName(cropDetail.getCropName());
		}
		if (Objects.nonNull(cropDetail.getCropType())&& !"".equalsIgnoreCase(cropDetail.getCropType())) 
		{
			cropdb.setCropType(cropDetail.getCropType());
		}		
		if (Objects.nonNull(cropDetail.getCropInfo())&& !"".equalsIgnoreCase(cropDetail.getCropInfo()))
		{
			cropdb.setCropInfo(cropDetail.getCropInfo());
		}
		if (Objects.nonNull(cropDetail.getPlantationInfo())&& !"".equalsIgnoreCase(cropDetail.getPlantationInfo()))
		{
			cropdb.setPlantationInfo(cropDetail.getPlantationInfo());
		}		
		if (Objects.nonNull(cropDetail.getPhase1())&& !"".equalsIgnoreCase(cropDetail.getPhase1()))
		{
			cropdb.setPhase1(cropDetail.getPhase1());
		}		
		if (Objects.nonNull(cropDetail.getPhase2())&& !"".equalsIgnoreCase(cropDetail.getPhase2()))
		{
			cropdb.setPhase1(cropDetail.getPhase2());
		}		
		if (Objects.nonNull(cropDetail.getPhase3())&& !"".equalsIgnoreCase(cropDetail.getPhase3()))
		{
			cropdb.setPhase3(cropDetail.getPhase3());
		}		
		if (Objects.nonNull(cropDetail.getPhase4())&& !"".equalsIgnoreCase(cropDetail.getPhase4())) 
		{
			cropdb.setPhase4(cropDetail.getPhase4());
		}
		return cropDetailRepository.save(cropdb);
	}

	// Delete operation
	@Override
	public void deleteCropDetailById(Long cropDetailId)
	{
		cropDetailRepository.deleteById(cropDetailId);
	}

	@Override
	public Optional<CropDetail> getCropDetailById(Long id) {
		// TODO Auto-generated method stub
		return cropDetailRepository.findById(id);
	}

	
}
