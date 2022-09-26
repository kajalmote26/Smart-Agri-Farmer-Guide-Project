
package com.app.service;

// Importing required classes
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ProductRepository;
import com.app.pojos.Product;

// Annotation
@Service
@Transactional
// Class
public class ProductServiceImpl implements ProductService 
{
	@Autowired
	private ProductRepository productRepository;

	// Save operation
	@Override
	public Product saveProduct(Product product)
	{
		return productRepository.save(product);
	}

	// Read operation
	@Override public List<Product> fetchProductsList()
	{
		return (List<Product>)
			productRepository.findAll();
	}

	// Update operation
	@Override
	public Product updateProduct(Product product,Long productId)
	{
		Product prodb= productRepository.findById(productId).get();
		if (Objects.nonNull(product.getProductName())&& !"".equalsIgnoreCase(product.getProductName()))
		{
			prodb.setProductName(product.getProductName());
		}
		if (Objects.nonNull(product.getCategoryName())&& !"".equalsIgnoreCase(product.getCategoryName())) 
		{
			prodb.setCategoryName(product.getCategoryName());
		}
		if (Objects.nonNull(product.getProductPrice())) 
		{
			prodb.setProductPrice(product.getProductPrice());
		}
		return productRepository.save(prodb);
	}

	// Delete operation
	@Override
	public void deleteProductById(Long productId)
	{
		productRepository.deleteById(productId);
	}

	@Override
	public Optional<Product> getProductById(Long productId) 
	{
		return productRepository.findById(productId);
	}

	@Override
	public List<Product> getProductListByShopId(Long shopId)
	{
		return productRepository.findProductListByShopId(shopId);
	}

	@Override
	public List<Product> getProductListByNameContact(String shopName, Long contact) {
		// TODO Auto-generated method stub
		return productRepository.findProductListByNameContact(shopName, contact);
	}

	
}
