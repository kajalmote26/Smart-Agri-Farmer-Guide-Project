
package com.app.dao;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Product;

// Annotation
@Repository

// Interface
public interface ProductRepository extends JpaRepository<Product, Long>
{
	List<Product> findProductListByShopId(Long shopId);
	
	@Query("select p from Product p inner join Shop s on p.shop=s.id where s.shopName=:shopName and s.contact=:contact")
	List<Product> findProductListByNameContact(@Param("shopName")String shopName,@Param("contact")Long contact);
//	@Transactional
//	void deleteByShopId(Long shopId);
}
