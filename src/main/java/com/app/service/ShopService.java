package com.app.service;
import java.util.List;
import java.util.Optional;

import com.app.pojos.Shop;

public interface ShopService 
{
	Shop saveShop(Shop shop);				//to add new shop
	List<Shop> fetchShopsList();			//getting all shops who have registered
	Shop updateShop(Shop shop,Long shopId);	//update shop details
	void deleteShopById(Long shopId);		//delete shop by the shop id	
	List<Shop> getShopByProduct(String productName);			//getting products list in shop
	Optional<Shop> getShopById(Long shopId);
	Optional<Shop> existsByNameContact(String shopName,Long contact);
	Long getIdByLicense(String licenseNo);
}
