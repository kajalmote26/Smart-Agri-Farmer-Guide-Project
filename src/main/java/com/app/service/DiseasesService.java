package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.pojos.Diseases;

public interface DiseasesService 
{
	Diseases save(Diseases disease);
	List<Diseases> getAllDiseases();
	Diseases updateDiseases(Diseases disease,Long id);
	void deleteByDiseaseId(Long id);
	Optional<Diseases> getByName(String name);
	Optional<Diseases> getById(Long id);
	List<Diseases> getAllDiseasesByCropName(String cropName);
}
