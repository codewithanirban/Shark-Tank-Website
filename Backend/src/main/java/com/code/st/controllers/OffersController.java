package com.code.st.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.code.st.models.Offers;
import com.code.st.services.OffersService;

@RestController
@RequestMapping("api/offers/")
public class OffersController {
	@Autowired
	OffersService offerService;
	
	@GetMapping(value="/")
	public List<Offers> getAllOffer() {
		return offerService.getAll();
	}
	@GetMapping(value="/{id}")
	public Offers getOfferById(@PathVariable("id") int id) {
		return offerService.getById(id);
	}
	@PostMapping(value="create")
	public Offers createOffer(@RequestBody Offers offer) {
		return offerService.add(offer);
	}
	@PutMapping(value="edit")
	public Offers editOffer(@RequestBody Offers offer) {
		return offerService.update(offer);
	}
	@DeleteMapping(value="delete/{id}")
	public String deleteOffer(@PathVariable("id") int id) {
		return offerService.delete(id);
	}
	
}
