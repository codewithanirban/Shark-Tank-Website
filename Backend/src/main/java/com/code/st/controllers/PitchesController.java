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

import com.code.st.models.Pitches;
import com.code.st.services.PitchesService;

@RestController
@RequestMapping("api/pitch/")
public class PitchesController {
	@Autowired
	PitchesService pitchService;
	
	@GetMapping(value = "/")
	public List<Pitches> getAllPitches() {
		return pitchService.getAll();
	}
	
	@GetMapping(value="/{id}")
	public Pitches getPitchById(@PathVariable("id") int id) {
		return pitchService.getById(id);
	}
	@PostMapping(value="create")
	public Pitches createPitch(@RequestBody Pitches pitch) {
		return pitchService.add(pitch);
	}
	@PutMapping(value="edit")
	public Pitches editPitch(@RequestBody Pitches pitch) {
		return pitchService.update(pitch);
	}
	
	@DeleteMapping(value="delete/{id}")
	public String deletePitch(@PathVariable("id") int id) {
		return pitchService.delete(id);
	}
	
}
