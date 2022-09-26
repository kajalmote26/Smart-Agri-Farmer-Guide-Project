
package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.UserRepository;
import com.app.exception_handler.ResourceNotFoundException1;
import com.app.pojos.Shop;
import com.app.service.ShopService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ShopController 
{
	@Autowired 
	private ShopService shopService;
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/users/{userId}/shops")
	public ResponseEntity<Shop> addShop(@PathVariable(value = "userId") Long userId,@RequestBody Shop shopRequest)
	{
		Shop shop = userRepository.findById(userId).map(user -> 
		{
		      shopRequest.setUser(user);
		      return shopService.saveShop(shopRequest);
	    })
		.orElseThrow(() -> new ResourceNotFoundException1("Not found User with id = " + userId));
	    return new ResponseEntity<>(shop, HttpStatus.CREATED);
	}
	
	@GetMapping("/shops")
	public List<Shop> fetchShopsList()
	{
		return shopService.fetchShopsList();
	}

	@PutMapping("/shops/{id}")
	public Shop updateShop(@RequestBody Shop shop,@PathVariable("id") Long shopId)
	{
		return shopService.updateShop(shop, shopId);
	}

	@DeleteMapping("/shops/{id}")
	public String deleteShopById(@PathVariable("id")Long shopId)
	{
		shopService.deleteShopById(shopId);
		return "Deleted Successfully";
	}
	
	@GetMapping("/shoplist/{productName}")
	public ResponseEntity<?> getShopListByProduct(@PathVariable("productName") String productName)
	{
		List<Shop> shopList=shopService.getShopByProduct(productName);
		return new ResponseEntity<>(shopList, HttpStatus.OK);
	}
	
	 @GetMapping("/shops/{id}")
	 public ResponseEntity<Shop> getShopById(@PathVariable("id") long id) 
	 {
		  Shop shop = shopService.getShopById(id).orElseThrow(() -> new ResourceNotFoundException1("Not found Shop with id = " + id));
		  return new ResponseEntity<>(shop, HttpStatus.OK);
	 }
	 @GetMapping("/shops/{shopName}/{contact}")
	 public ResponseEntity<Shop> getShopByNameContact(@PathVariable("shopName") String shopName,@PathVariable("contact")Long contact) 
	 {
		  Shop shop = shopService.existsByNameContact(shopName,contact).orElseThrow(() -> new ResourceNotFoundException1("Not found Shop with id = " + shopName+" "+contact));
		  return new ResponseEntity<>(shop, HttpStatus.OK);
	 }
	 
	 @GetMapping("/shops/{licenseNo}")
		public Long getIdByLicense(@PathVariable("licenseNo") String licenseNo)
		{
			return shopService.getIdByLicense(licenseNo);
		}
}
