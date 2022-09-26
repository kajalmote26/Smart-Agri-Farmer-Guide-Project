
package com.app.dao;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Merchant;

// Annotation
@Repository

// Interface
public interface MerchantRepository extends JpaRepository<Merchant, Long> 
{
	@Query("select m from Merchant m where m.city=:city")
	public List<Merchant> findByCity(@Param("city") String city);
}
