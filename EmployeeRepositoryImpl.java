package com.sbi.repo;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.sbi.pojo.Employee;

@Repository("empRepo")
public class EmployeeRepositoryImpl implements EmployeeRepository {

	
	DataSource dataSource; //i want this to be auto injected
	
	
	
	public EmployeeRepositoryImpl(@Qualifier("myds1") DataSource dataSource) {
		super();
		System.out.println("EmployeeRepositoryImpl() ctor..dataSource : "+dataSource);
		this.dataSource = dataSource;
		
	}

	@Override
	public void addEmployee(Employee emp) {
		// TODO Auto-generated method stub
		System.out.println("adding the employee.....dataSource : "+dataSource);

	}

	@Override
	public Employee getEmployee(int empno) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Employee> getEmployees() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateEmployee(Employee emp) {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteEmployee(int empno) {
		// TODO Auto-generated method stub

	}

}
