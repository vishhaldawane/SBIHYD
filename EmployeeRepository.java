package com.sbi.repo;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.sbi.pojo.Employee;

@Repository //oldname to it is DAO design
public interface EmployeeRepository {

	void addEmployee(Employee emp);   //C
	Employee getEmployee(int empno);  //R
	List<Employee> getEmployees();    //RA
	void updateEmployee(Employee emp);//U
	void deleteEmployee(int empno);   //D
	
}
