
package com.app.dao;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.DailyMarketPrice;

// Annotation
@Repository

// Interface
public interface DailyMarketPriceRepository	extends JpaRepository<DailyMarketPrice, Long> {

	@Query("select d from DailyMarketPrice d where d.cdate=:cdate")
	public List<DailyMarketPrice> findByDate(@Param ("cdate") String cdate);
	
}
