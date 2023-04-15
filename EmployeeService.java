package com.sbi.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sbi.pojo.Employee;
import com.sbi.service.myexceptions.EmployeeAlreadyExistsException;
// like service wada/sambar/chutney 
// in the plate to us
@Service  //also a spring component, purpose is to develop "business logic"
public interface EmployeeService { //one service can talk to another services
								// one service can talk to multiple repositories
	
	void addEmployeeService(Employee emp) throws EmployeeAlreadyExistsException;
	/*Employee getEmployeeService(int empno) throws EmployeeNotFoundException;
	List<Employee> getEmployeesService() throws NoEmployeesException;
	void updateEmployeeService(Employee emp) throws EmployeeNotFoundException;
	void deleteEmployeeService(int empno) throws EmployeeNotFoundException;
	*/
}
