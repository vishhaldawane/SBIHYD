package com.sbi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sbi.pojo.Employee;
import com.sbi.repo.EmployeeRepository;
import com.sbi.service.myexceptions.EmployeeAlreadyExistsException;
import com.sbi.service.myexceptions.EmployeeNotFoundException;
import com.sbi.service.myexceptions.NoEmployeesException;

@Service("empService")
public class EmployeeServiceImpl implements EmployeeService {

	
	@Autowired
	EmployeeRepository empRepository;
	
	@Override
	public void addEmployeeService(Employee emp) throws EmployeeAlreadyExistsException {
		// TODO Auto-generated method stub
		
		System.out.println("EmployeeServiceImpl: finding the object...");
		Employee empFound = empRepository.getEmployee(emp.getEmployeeNumber());
		
		if(empFound==null) {
			System.out.println("EmployeeServiceImpl: adding the object...");
			empRepository.addEmployee(emp);
		}
		else {
			
			EmployeeAlreadyExistsException empExistsEx = new EmployeeAlreadyExistsException("This Employee Already Exists");
			System.out.println("EmployeeServiceImpl: throwing an exception...");
			throw empExistsEx;
		}
	}
/*
	@Override
	public Employee getEmployeeService(int empno) throws EmployeeNotFoundException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Employee> getEmployeesService() throws NoEmployeesException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateEmployeeService(Employee emp) throws EmployeeNotFoundException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteEmployeeService(int empno) throws EmployeeNotFoundException {
		// TODO Auto-generated method stub
		
	}*/

}
