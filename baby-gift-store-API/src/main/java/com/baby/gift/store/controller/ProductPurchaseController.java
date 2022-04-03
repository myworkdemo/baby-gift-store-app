package com.baby.gift.store.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/product-purchase")
public class ProductPurchaseController {
	
	@GetMapping(value = "/msg")
	public String sayHello() {
		System.out.println("sayHello()...");
		return "Hello User!";
	}

}
