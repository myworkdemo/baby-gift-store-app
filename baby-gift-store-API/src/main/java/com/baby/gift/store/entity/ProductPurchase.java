package com.baby.gift.store.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "product_purchase")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class ProductPurchase {
	
	@JsonProperty("id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long productPurchaseId;
    private String productType;
    private String productName;
    private int productQuntity;
    private double purchasePrice;
    private String retailerAddress;
    private String retailerMobileNo;
    private String purchaseDate;
    private String purchaseTime;
}