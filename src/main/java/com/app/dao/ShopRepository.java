
package com.app.dao;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Shop;

@Repository
public interface ShopRepository extends JpaRepository<Shop, Long>
{		
	//@Query("select s.shopName,s.ownerName,s.village,s.taluka,s.district,p.productName,p.productPrice from Shop s inner join Product p on s.id=p.shop where p.productName=:productName order by p.productPrice")
	@Query("select p.shop,s.contact,s.shopName,s.ownerName,s.village,s.taluka,s.district,p.productName,p.productPrice from User u inner join Shop s on u.id=s.user inner join Product p on s.id=p.shop where p.productName=:productName order by p.productPrice")
	List<Shop> getShopByProduct(@Param("productName") String productName);
	
	@Query("select s from Shop s where s.shopName=:shopName and s.contact=:contact")
	Optional<Shop> existsByNameContact(@Param("shopName") String shopName,@Param("contact")Long contact);
	
	@Query("select s.id from Shop s where s.licenseNo=:licenseNo")
	Long getIdByLicense(@Param("licenseNo")String licenseNo);
}
