package com.app.service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.DiseaseRepository;
import com.app.pojos.Diseases;

@Service
@Transactional
public class DiseasesServiceImpl implements DiseasesService
{
	@Autowired
	private DiseaseRepository diseaseRepository;

	@Override
	public Diseases save(Diseases disease)
	{
		return diseaseRepository.save(disease);
	}

	@Override
	public List<Diseases> getAllDiseases()
	{
		return diseaseRepository.findAll();
	}

	@Override
	public Diseases updateDiseases(Diseases disease, Long id) 
	{
		Diseases diseasedb= diseaseRepository.findById(id).get();
		if (Objects.nonNull(disease.getCropName())&& !"".equalsIgnoreCase(disease.getCropName()))
		{
			diseasedb.setCropName(disease.getCropName());
		}
		if (Objects.nonNull(disease.getDiseaseName())&& !"".equalsIgnoreCase(disease.getDiseaseName())) 
		{
			diseasedb.setDiseaseName(disease.getDiseaseName());
		}
		if (Objects.nonNull(disease.getDiseaseInfo())&& !"".equalsIgnoreCase(disease.getDiseaseInfo()))
		{
			diseasedb.setDiseaseInfo(disease.getDiseaseInfo());
		}
		if (Objects.nonNull(disease.getPesticide())&& !"".equalsIgnoreCase(disease.getPesticide())) 
		{
			diseasedb.setPesticide(disease.getPesticide());
		}
		if (Objects.nonNull(disease.getPlantProtection())&& !"".equalsIgnoreCase(disease.getPlantProtection()))
		{
			diseasedb.setPlantProtection(disease.getPlantProtection());
		}
		return diseaseRepository.save(diseasedb);
	}

	@Override
	public void deleteByDiseaseId(Long id) 
	{
		diseaseRepository.deleteById(id);
	}

	@Override
	public Optional<Diseases> getByName(String name) 
	{
		return diseaseRepository.findByName(name);
	}

	@Override
	public List<Diseases> getAllDiseasesByCropName(String cropName) {
		// TODO Auto-generated method stub
		return diseaseRepository.findByCropName(cropName);
	}

	@Override
	public Optional<Diseases> getById(Long id) {
		// TODO Auto-generated method stub
		return diseaseRepository.findById(id);
	}

}
