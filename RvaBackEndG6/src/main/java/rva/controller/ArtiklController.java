package rva.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import rva.model.Artikl;
import rva.service.ArtiklService;

@RestController
public class ArtiklController {

	@Autowired
	private ArtiklService service;
	
	
	@GetMapping("/hello")
	public String sayHello() {
		return "Hello there!";
	}
	
	@GetMapping("/artikl")
	public ResponseEntity<List<Artikl>> findAllArtikls(){
		return ResponseEntity.ok(service.findAll());
	}
	
	@GetMapping("/artikl/{id}")
	public ResponseEntity<?> getArtiklById(@PathVariable long id){
		if(service.existsById(id)) {
			return ResponseEntity.ok(service.findById(id));
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("Resource with requested ID: " + id + " does not exist");
		}
	}
	
	@GetMapping("/artikl/naziv/{naziv}")
	public ResponseEntity<?> getArtiklsByNaziv(@PathVariable String naziv){
		
		if(service.findByNaziv(naziv).get().isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("Resources with requested Naziv: " + naziv + " does not exist");
		}else {
			return ResponseEntity.ok(service.findByNaziv(naziv).get());
			//return ResponseEntity.status(HttpStatus.OK).body(service.findByNaziv(naziv).get());
		}
	}
	
}
