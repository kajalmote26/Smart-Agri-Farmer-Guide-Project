
package com.app.service;

// Importing required classes
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.DailyMarketPriceRepository;
import com.app.pojos.DailyMarketPrice;

// Annotation
@Service
@Transactional
// Class
public class DailyMarketPriceImpl
	implements DailyMarketPriceService {

	@Autowired
	private DailyMarketPriceRepository dailyMarketPriceRepository;

	// Save operation
	@Override
	public DailyMarketPrice saveDailyMarketPrice(DailyMarketPrice dailyMarketPrice)
	{
		return dailyMarketPriceRepository.save(dailyMarketPrice);
	}

	// Read operation
	@Override public List<DailyMarketPrice> fetchDailyMarketPricesList()
	{
		return (List<DailyMarketPrice>)
			dailyMarketPriceRepository.findAll();
	}

//	// Update operation
	@Override
	public DailyMarketPrice updateDailyRates(DailyMarketPrice dailyMarketPrice,Long id)
	{
		DailyMarketPrice dailyMarketPricedb= dailyMarketPriceRepository.findById(id).get();

		if (Objects.nonNull(dailyMarketPrice.getCrop_Name()) && !"".equalsIgnoreCase(dailyMarketPrice.getCrop_Name()))
		{
			dailyMarketPricedb.setCrop_Name(dailyMarketPrice.getCrop_Name());
		}
		if (Objects.nonNull(dailyMarketPrice.getCropType()) && !"".equalsIgnoreCase(dailyMarketPrice.getCropType()))
		{
			dailyMarketPricedb.setCropType(dailyMarketPrice.getCropType());
		}
		if (Objects.nonNull(dailyMarketPrice.getQuantity()))
		{
			dailyMarketPricedb.setQuantity(dailyMarketPrice.getQuantity());
		}
		if (Objects.nonNull(dailyMarketPrice.getMinPrice()))
		{
			dailyMarketPricedb.setMinPrice(dailyMarketPrice.getMinPrice());
		}
		if (Objects.nonNull(dailyMarketPrice.getMaxPrice()))
		{
			dailyMarketPricedb.setMaxPrice(dailyMarketPrice.getMaxPrice());
		}
		if (Objects.nonNull(dailyMarketPrice.getLocation()) && !"".equalsIgnoreCase(dailyMarketPrice.getLocation()))
		{
			dailyMarketPricedb.setLocation(dailyMarketPrice.getLocation());
		}
		if (Objects.nonNull(dailyMarketPrice.getCdate()))
		{
			dailyMarketPricedb.setCdate(dailyMarketPrice.getCdate());
		}
		return dailyMarketPriceRepository.save(dailyMarketPricedb);
	}
//
//	// Delete operation
	@Override
	public void deleteDailyMarketPriceById(Long dailyRatesId)
	{
		dailyMarketPriceRepository.deleteById(dailyRatesId);
	}

	@Override
	public List<DailyMarketPrice> findByDate(String cdate) {
		// TODO Auto-generated method stub
		return dailyMarketPriceRepository.findByDate(cdate);
	}

	@Override
	public Optional<DailyMarketPrice> getDailyRatesById(Long id) {
		return dailyMarketPriceRepository.findById(id);
	}

	
}
