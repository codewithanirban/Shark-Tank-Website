package com.code.st.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.code.st.models.Pitches;
import com.code.st.services.IPitchesService;

@RestController
@RequestMapping("/api/pitches")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class PitchesController {

	@Autowired
	private IPitchesService pitchService;

	@GetMapping("/")
	public List<Pitches> getAllPitches() {
		return pitchService.getAll();
	}

	@GetMapping("/{id}")
	public Pitches getPitchById(@PathVariable int id) {
		return pitchService.getById(id);
	}

	@PostMapping("/create")
	public Pitches createPitch(@RequestBody Pitches pitch) {
		return pitchService.add(pitch);
	}

	@PutMapping("/{id}")
	public Pitches updatePitch(@PathVariable int id, @RequestBody Pitches pitch) {
		pitch.setPitch_id(id);
		return pitchService.update(pitch);
	}

	@DeleteMapping("/{id}")
	public String deletePitch(@PathVariable int id) {
		return pitchService.delete(id);
	}
}
