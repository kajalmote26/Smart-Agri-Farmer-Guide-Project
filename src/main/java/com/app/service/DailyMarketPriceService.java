
package com.app.service;
// Importing required classes
import java.util.List;
import java.util.Optional;

import com.app.pojos.DailyMarketPrice;

// Interface
public interface DailyMarketPriceService {

	// Save operation
	DailyMarketPrice saveDailyMarketPrice(DailyMarketPrice dailyMarketPrice);

	// Read operation
	List<DailyMarketPrice> fetchDailyMarketPricesList();

	// Update operation
	DailyMarketPrice updateDailyRates(DailyMarketPrice dailyMarketPrice,Long id);

// Delete operation
	void deleteDailyMarketPriceById(Long dailyRatesId);
	
	//Get Mapping By Date
	List<DailyMarketPrice> findByDate(String cdate);
	
	Optional<DailyMarketPrice> getDailyRatesById(Long id);
}
