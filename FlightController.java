package com.sbi.controller;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.sbi.pojo.Flight;
import com.sbi.service.FlightNotFoundException;
import com.sbi.service.FlightService;
@RestController // REpresentational State Transfer | JSON
public class FlightController { // all the URLs are tested via the Postman
	@Autowired FlightService flightService;
	
	public FlightController() {
		System.out.println("FlightController() ctor...");
	}	
	@GetMapping("/") // http://localhost:8090
	public String greet() {
		return "<h1> Welcome to Flight Controller </h1>";
	}	
	@GetMapping("/home") // http://localhost:80980/home
	public String myHomePage() {
		return "<h1> Welcome to My Home Page </h1>";
	}	
	@GetMapping("/flights") // http://localhost:8090/flights
	public List<Flight> getFlights() {
		return flightService.getAvailableFlightsService();
	}
	
	
	@GetMapping("/flight/{flno}") // http://localhost:8090/flights
	public ResponseEntity<?> getFlight(@PathVariable("flno")int flightNumber) {
		Optional<Flight> flight = null;
		try {
			flight = flightService.getFlightService(flightNumber);
		} catch (FlightNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
		return ResponseEntity.of(flight);
				
	}

}
