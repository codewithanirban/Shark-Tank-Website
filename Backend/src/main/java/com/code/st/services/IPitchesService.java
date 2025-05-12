package com.code.st.services;

import java.util.List;

import com.code.st.models.Pitches;


public interface IPitchesService {

	public Pitches add(Pitches pitch);
	public Pitches update(Pitches pitch);
	public String delete(Pitches pitch);
	public String delete(int id);
	// create some method to get Investor by Id
	public List<Pitches> getAll();
	public Pitches getById(int id);
	
}
