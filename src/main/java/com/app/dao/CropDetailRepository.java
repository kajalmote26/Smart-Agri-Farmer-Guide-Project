
package com.app.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.CropDetail;

// Annotation
@Repository

// Interface
public interface CropDetailRepository extends JpaRepository<CropDetail, Long>
{
	
}
