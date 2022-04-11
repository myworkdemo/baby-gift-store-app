package com.baby.gift.store.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.baby.gift.store.entity.ProductPurchase;

@Repository
public interface ProductPurchaseRepository extends JpaRepository<ProductPurchase, Long>{

}
