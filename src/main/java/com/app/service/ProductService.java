
package com.app.service;
// Importing required classes
import java.util.List;
import java.util.Optional;

import com.app.pojos.Product;

// Interface
public interface ProductService {

	// Save operation
	Product saveProduct(Product product);

	// Read operation
	List<Product> fetchProductsList();

	// Update operation
	Product updateProduct(Product product,Long productId);

	// Delete operation
	void deleteProductById(Long productId);
	
	Optional<Product> getProductById(Long productId);
	
	List<Product> getProductListByShopId(Long shopId);
//Get Product List By Shop Name and contact
	List<Product> getProductListByNameContact(String shopName,Long contact);
}
