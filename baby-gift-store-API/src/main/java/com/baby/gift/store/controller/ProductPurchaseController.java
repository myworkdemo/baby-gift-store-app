package com.baby.gift.store.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baby.gift.store.entity.ProductPurchase;
import com.baby.gift.store.repository.ProductPurchaseRepository;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/product-purchase")
public class ProductPurchaseController {
	
	@Autowired
	private ProductPurchaseRepository productPurchaseRepository;
	
	@GetMapping(value = "/msg")
	public String sayHello() {
		System.out.println("sayHello()...");
		return "Hello User!";
	}
	
	@PostMapping("/save")
	public ResponseEntity<ProductPurchase> saveProductPurchase(@RequestBody ProductPurchase productPurchase) {
		ProductPurchase saveProductPurchase = productPurchaseRepository.save(productPurchase);

		/*
		 * URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
		 * .buildAndExpand(saveProductPurchase.getProductPurchaseId()).toUri();
		 */

		return ResponseEntity.status(HttpStatus.CREATED).body(saveProductPurchase);

	}
	
	@GetMapping("/list")
	public ResponseEntity<List<ProductPurchase>> getAllProductPurchaseList() {
		List<ProductPurchase> productPurchaseList = productPurchaseRepository.findAll();

		return ResponseEntity.status(HttpStatus.OK).body(productPurchaseList);

	}
	
	

}
