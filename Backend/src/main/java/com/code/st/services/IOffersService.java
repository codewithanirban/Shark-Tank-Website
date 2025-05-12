package com.code.st.services;

import java.util.List;

import com.code.st.models.Offers;

public interface IOffersService {
	public Offers add(Offers offers);
	public Offers update(Offers offers);
	public String delete(Offers offers);
	public String delete(int id);
	
	public List<Offers> getAll();
	public Offers getById(int id);
}
