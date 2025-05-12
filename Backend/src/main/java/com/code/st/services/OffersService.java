package com.code.st.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.st.models.Offers;
import com.code.st.repositories.IOffersRepositories;

@Service
public class OffersService implements IOffersService{
	
	@Autowired
	IOffersRepositories offersRepository;
	
	@Override
	public Offers add(Offers offers) {
		// TODO Auto-generated method stub
		return offersRepository.save(offers);
	}

	@Override
	public Offers update(Offers offers) {
		// TODO Auto-generated method stub
		return offersRepository.save(offers);
	}

	@Override
	public String delete(Offers offers) {
		// TODO Auto-generated method stub
		offersRepository.delete(offers);
		return "Record is deleted Successfully";
	}

	@Override
	public String delete(int id) {
		// TODO Auto-generated method stub
		Offers offer = offersRepository.findById(id).get();
		if(offer==null) {
			return "Record with id " + id + "not found.";
		}
		offersRepository.delete(offer);
		return "Record is deleted";
	}

	@Override
	public List<Offers> getAll() {
		// TODO Auto-generated method stub
		return offersRepository.findAll();
	}

	@Override
	public Offers getById(int id) {
		// TODO Auto-generated method stub
		Offers offer = offersRepository.findById(id).get();
		return offer;
	}

}
