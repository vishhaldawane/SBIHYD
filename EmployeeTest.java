
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.sbi.DepartmentRepository;
import com.sbi.pojo.Department;
import com.sbi.pojo.Employee;
import com.sbi.repo.EmployeeRepository;
import com.sbi.service.EmployeeService;
import com.sbi.service.myexceptions.EmployeeAlreadyExistsException;


public class EmployeeTest {
	
	@Test /*4*/
	public void testCase1() {
		System.out.println("Trying to create spring container....");
		ApplicationContext container = 
				new ClassPathXmlApplicationContext("myspringAnno.xml"); 
		System.out.println("container created .. : "+container);
		
		//ctrl+shift+m to auto import the lines
		Employee emp = (Employee) container.getBean("emp");
	
		emp.setEmployeeNumber(222);
		emp.setEmployeeName("Deepak"); //Deepak Chopra - author from last 15 years...
		emp.setEmployeeSalary(500000); //per month salary

		System.out.println("emp number : "+emp.getEmployeeNumber());
		System.out.println("emp name   : "+emp.getEmployeeName());
		System.out.println("emp salary : "+emp.getEmployeeSalary());
		
		Department dept= (Department)container.getBean("mydept");
		System.out.println("dept : "+dept);
	
		EmployeeRepository empRepo = (EmployeeRepository) container.getBean("empRepo");
		System.out.println("got the emp repo : "+empRepo);
		empRepo.addEmployee(emp); //repository testing
		
	}
	
	@Test
	
	public void addEmployeeServiceTest() { //service testing

		System.out.println("Trying to create spring container....");
		ApplicationContext container = 
				new ClassPathXmlApplicationContext("myspringAnno.xml"); 
		System.out.println("container created .. : "+container);
		
		EmployeeService empService = (EmployeeService) container.getBean("empService");
		
		Employee newEmp = (Employee) container.getBean("emp");
		
		newEmp.setEmployeeNumber(444);
		newEmp.setEmployeeName("Anant"); //Deepak Chopra - author from last 15 years...
		newEmp.setEmployeeSalary(700000); //per month salary

		
		try {
			empService.addEmployeeService(newEmp);
		} catch (EmployeeAlreadyExistsException e) {

			System.out.println("Exception : "+e.getMessage());
		} 
		
	}
	
	

}
