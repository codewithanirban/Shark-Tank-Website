package com.code.st.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.st.models.Pitches;
import com.code.st.repositories.IPitchesRepositories;

@Service
public class PitchesService implements IPitchesService {
	
	@Autowired
	IPitchesRepositories pitchRepository;
	
	@Override
	public Pitches add(Pitches pitch) {
		// TODO Auto-generated method stub
		return pitchRepository.save(pitch);
	}

	@Override
	public Pitches update(Pitches pitch) {
		// TODO Auto-generated method stub
		return pitchRepository.save(pitch);
	}

	@Override
	public String delete(Pitches pitch) {
		// TODO Auto-generated method stub
		pitchRepository.delete(pitch);
		return "Pitch is Deleted";
	}

	@Override
	public String delete(int id) {
		// TODO Auto-generated method stub
		Pitches pitch = pitchRepository.findById(id).get();
		if(pitch==null)
		{
			return "Pitch with Id "+id+" not found";
		}
		pitchRepository.delete(pitch);
		return "Record is deleted";
	}

	@Override
	public List<Pitches> getAll() {
		// TODO Auto-generated method stub
		return pitchRepository.findAll();
	}

	@Override
	public Pitches getById(int id) {
		// TODO Auto-generated method stub
		Pitches pitches = pitchRepository.findById(id).get();
		return pitches;
	}

}
