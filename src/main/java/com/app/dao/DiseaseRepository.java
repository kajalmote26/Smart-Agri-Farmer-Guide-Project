package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Diseases;

@Repository
public interface DiseaseRepository extends JpaRepository<Diseases, Long>
{
	@Query("select d from Diseases d where d.diseaseName=:diseaseName")
	public Optional<Diseases> findByName(@Param ("diseaseName") String diseaseName);
	
	@Query("select d from Diseases d where d.cropName=:cropName")
	public List<Diseases> findByCropName(@Param ("cropName") String cropName);
}
