package com.sbi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sbi.pojo.Flight;
import com.sbi.service.FlightService;
@RestController // REpresentational State Transfer | JSON
public class FlightController {
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

}
