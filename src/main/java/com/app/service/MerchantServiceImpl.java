
package com.app.service;

// Importing required classes
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.MerchantRepository;
import com.app.pojos.Merchant;

// Annotation
@Service
@Transactional
// Class
public class MerchantServiceImpl implements MerchantService
{
	@Autowired
	private MerchantRepository merchantRepository;

	// Save operation
	@Override
	public Merchant saveMerchant(Merchant merchant)
	{
		return merchantRepository.save(merchant);
	}

	// Read operation
	@Override public List<Merchant> fetchMerchantsList()
	{
		return (List<Merchant>)merchantRepository.findAll();
	}

	// Update operation
	@Override
	public Merchant updateMerchant(Merchant merchant,Long merchantId)
	{
		Merchant mercdb= merchantRepository.findById(merchantId).get();

		if (Objects.nonNull(merchant.getMerchantName()) && !"".equalsIgnoreCase(merchant.getMerchantName()))
		{
			mercdb.setMerchantName(merchant.getMerchantName());
		}

		if (Objects.nonNull(merchant.getCity()) && !"".equalsIgnoreCase(merchant.getCity())) 
		{
			mercdb.setCity(merchant.getCity());
		}
		if (Objects.nonNull(merchant.getContact())) 
		{
			mercdb.setContact(merchant.getContact());
		}

		return merchantRepository.save(mercdb);
	}

	// Delete operation
	@Override
	public void deleteMerchantById(Long merchantId)
	{
		merchantRepository.deleteById(merchantId);
	}

	@Override
	public List<Merchant> getMerchantListByCity(String city) 
	{
		return merchantRepository.findByCity(city);
	}

	@Override
	public Optional<Merchant> getMerchantById(Long id) {
		// TODO Auto-generated method stub
		return merchantRepository.findById(id);
	}
}
