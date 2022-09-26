
package com.app.service;

// Importing required classes
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ShopRepository;
import com.app.pojos.Shop;

@Service
@Transactional
public class ShopServiceImpl implements ShopService
{
	@Autowired
	private ShopRepository shopRepository;

	@Override
	public Shop saveShop(Shop shop)
	{
		return shopRepository.save(shop);
	}

	@Override public List<Shop> fetchShopsList()
	{
		return (List<Shop>)shopRepository.findAll();
	}

	@Override
	public Shop updateShop(Shop shop,Long shopId)
	{
		Shop shopdb= shopRepository.findById(shopId).get();
		if (Objects.nonNull(shop.getShopName())&& !"".equalsIgnoreCase(shop.getShopName())) 
		{
			shopdb.setShopName(shop.getShopName());
		}
		if (Objects.nonNull(shop.getOwnerName())&& !"".equalsIgnoreCase(shop.getOwnerName())) 
		{
			shopdb.setOwnerName(shop.getOwnerName());
		}
		if (Objects.nonNull(shop.getLicenseNo())&& !"".equalsIgnoreCase(shop.getLicenseNo()))
		{
			shopdb.setLicenseNo(shop.getLicenseNo());
		}		
		if (Objects.nonNull(shop.getDistrict())&& !"".equalsIgnoreCase(shop.getDistrict())) 
		{
			shopdb.setDistrict(shop.getDistrict());
		}		
		if (Objects.nonNull(shop.getTaluka())&& !"".equalsIgnoreCase(shop.getTaluka()))
		{
			shopdb.setTaluka(shop.getTaluka());
		}		
		if (Objects.nonNull(shop.getVillage())&& !"".equalsIgnoreCase(shop.getVillage()))
		{
			shopdb.setVillage(shop.getVillage());
		}
		return shopRepository.save(shopdb);
	}

	// Delete operation
	@Override
	public void deleteShopById(Long shopId)
	{
		shopRepository.deleteById(shopId);
	}

	@Override
	public List<Shop> getShopByProduct(String productName) 
	{
		return shopRepository.getShopByProduct(productName);
	}

	@Override
	public Optional<Shop> getShopById(Long shopId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Shop> existsByNameContact(String shopName, Long contact) {
		// TODO Auto-generated method stub
		return shopRepository.existsByNameContact(shopName, contact);
	}

	@Override
	public Long getIdByLicense(String licenseNo) {
		// TODO Auto-generated method stub
		return shopRepository.getIdByLicense(licenseNo);
	}

	
}
