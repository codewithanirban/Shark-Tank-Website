package com.code.st.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.code.st.models.Offers;
import com.code.st.services.IOffersService;

@RestController
@RequestMapping("/api/offers")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class OffersController {

	@Autowired
	private IOffersService offerService;

	@GetMapping("/")
	public List<Offers> getAllOffers() {
		return offerService.getAll();
	}

	@GetMapping("/{id}")
	public Offers getOfferById(@PathVariable int id) {
		return offerService.getById(id);
	}

	@PostMapping("/create")
	public Offers createOffer(@RequestBody Offers offer) {
		return offerService.add(offer);
	}

	@PutMapping("/{id}")
	public Offers updateOffer(@PathVariable int id, @RequestBody Offers offer) {
		offer.setOffer_id(id);
		return offerService.update(offer);
	}

	@DeleteMapping("/{id}")
	public String deleteOffer(@PathVariable int id) {
		return offerService.delete(id);
	}
}
