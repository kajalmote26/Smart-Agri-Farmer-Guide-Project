
package com.app.controller;

import java.util.List;
import java.util.Optional;

// Importing required classes
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

import com.app.dao.ShopRepository;
import com.app.exception_handler.ResourceNotFoundException1;
import com.app.pojos.Product;
import com.app.service.ProductService;

// Annotation
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")

// Class
public class ProductController
{
	// Annotation
	@Autowired 
	private ProductService productService;
	@Autowired 
	private ShopRepository shopRepository;
	
	@PostMapping("/shops/{shopId}/products")
	public ResponseEntity<Product> createProduct(@PathVariable(value = "shopId") Long shopId,@RequestBody Product productRequest)
	{
	    Product product = shopRepository.findById(shopId).map(shop -> 
	    {
		      productRequest.setShop(shop);
		      return productService.saveProduct(productRequest);
	    }).orElseThrow(() -> new ResourceNotFoundException1("Not found shop with id = " + shopId));
	    return new ResponseEntity<>(product, HttpStatus.CREATED);
	}
	
	
	// Read operation
	@GetMapping("/products")
	public List<Product> fetchProductsList()
	{
		return productService.fetchProductsList();
	}

	
	//Update Operation on product
	@PutMapping("/products/{id}")
	ResponseEntity<Product>  updateProduct(@RequestBody Product product,@PathVariable("id") Long productId)
	{
		Optional<Product> productData = productService.getProductById(productId);
		if (productData.isPresent()) {
			Product product1 = productData.get();
			product1.setProductName(product.getProductName());
			product1.setCategoryName(product.getCategoryName());
			product1.setProductPrice(product.getProductPrice());
			
			return new ResponseEntity<>(productService.saveProduct(product1), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	// Delete operation
	@DeleteMapping("/products/{id}")
	public String deleteProductById(@PathVariable("id")Long productId)
	{
		productService.deleteProductById(productId);
		return "Deleted Successfully";
	}
	
	@GetMapping("/products/{id}")
	public Optional<Product> findById(@PathVariable("id") Long productId)
	{
		return productService.getProductById(productId);
	}
	
	@GetMapping("/shops/{shopId}/products")
	public ResponseEntity<List<Product>> getAllProductsByShopId(@PathVariable(value = "shopId") Long shopId) 
	{
	    if (!shopRepository.existsById(shopId)) 
	    {
	    	throw new ResourceNotFoundException1("Not found Shop with id = " + shopId);
	    }
	    List<Product> products = productService.getProductListByShopId(shopId);
	    return new ResponseEntity<>(products, HttpStatus.OK);
	}
	

	@GetMapping("/shops/{shopName}/{contact}/products")
	public ResponseEntity<List<Product>> getAllProductsByNameContact(@PathVariable(value = "shopName") String shopName,@PathVariable(value = "contact") Long contact) 
	{
//	    if (!shopRepository.existsByNameContact(shopName,contact)) 
//	    {
//	    	throw new ResourceNotFoundException1("Not found Shop with Name and contact = " + shopName+contact);
//	    }
	    List<Product> products = productService.getProductListByNameContact(shopName,contact);
	    return new ResponseEntity<>(products, HttpStatus.OK);
	}
	
	
}
