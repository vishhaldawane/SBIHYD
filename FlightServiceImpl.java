package com.sbi.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sbi.pojo.Flight;
import com.sbi.repo.FlightRepository;

@Service("flightService")
public class FlightServiceImpl implements FlightService {

	@Autowired
	FlightRepository flightRepo; //implementation is SimpleJpaRepository via CrudRepository
	
	public FlightServiceImpl() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public List<Flight> getAvailableFlightsService() {

		System.out.println("=> Some PRE business logic here in the service...");
		
		List<Flight> flightList = (List<Flight>) flightRepo.findAll();
		
		for (Flight flight : flightList) {
			System.out.println("FLIGHT NO     : "+flight.getFlightId());
			System.out.println("FLIGHT NAME   : "+flight.getFlightName());
			System.out.println("FLIGHT SOURCE : "+flight.getFlightSource());
			System.out.println("FLIGHT DEST   : "+flight.getFlightDestination());
			System.out.println("---------------");
		}
		
		System.out.println("=> Some POST business logic here in the service...");
		return flightList;
	}
	
	@Transactional
	void addFlight(Flight flight)
	{
		flightRepo.save(flight); //this would invoke the insert query...
	}

}
