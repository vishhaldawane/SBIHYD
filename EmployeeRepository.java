package com.sbi.repo;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.sbi.pojo.Employee;

//making the wada, sambar, chutney
@Repository //also a spring component, purpose is CRUD on collection, oldname to it is DAO design
public interface EmployeeRepository { //never take business decisions here
										//it has only DB DML/SQL activities
									//NO BUSINESS LOGIC WRITENN HERE
	void addEmployee(Employee emp);   //C - INSERT QUERY
	Employee getEmployee(int empno);  //R  - SELECT QUERY
	List<Employee> getEmployees();    //RA - SELECT ALL RECORDS QUERY
	void updateEmployee(Employee emp);//U  - UPDATE QUERY
	void deleteEmployee(int empno);   //D  - DELETE QUERY
	
}
