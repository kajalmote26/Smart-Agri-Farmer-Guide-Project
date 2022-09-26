
package com.app.service;
// Importing required classes
import java.util.List;
import java.util.Optional;

import com.app.pojos.Merchant;

// Interface
public interface MerchantService
{
	// Save operation
	Merchant saveMerchant(Merchant merchant);
	// Read operation
	List<Merchant> fetchMerchantsList();
	// Update operation
	Merchant updateMerchant(Merchant Merchant,Long merchantId);
	// Delete operation
	void deleteMerchantById(Long merchantId);
	
	List<Merchant> getMerchantListByCity(String city);
	Optional<Merchant> getMerchantById(Long id);
}
