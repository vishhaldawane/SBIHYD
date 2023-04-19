package com.sbi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.sbi.pojo.Flight;

@Service
public interface FlightService {

	public List<Flight> getAvailableFlightsService();
	
	public Optional<Flight> getFlightService(int flightId) throws FlightNotFoundException;
	
	
	
	
}
