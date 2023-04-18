package com.sbi.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sbi.pojo.Flight;

@Service
public interface FlightService {

	public List<Flight> getAvailableFlightsService();
}
