package com.sbi;

import java.lang.annotation.Annotation;

public class TestAnnotation {
	public static void main(String[] args) {
		
		System.out.println("begin main");
		
		SavingsAccount savingsAccObj = new SavingsAccount();
		
		
		Class theClass = savingsAccObj.getClass(); // this will give you the meta data of this class
		
		
		Annotation anno [] = theClass.getAnnotations(); //will retrieve annotations of it
		
		for (Annotation annotation : anno) {
			System.out.println("Annotation is : "+annotation);
			DevelopedBy devBy = (DevelopedBy) annotation;
			System.out.println("devBy : "+devBy);			
			if(devBy.name().equals("deepak")) {
				System.out.println("Wow the code is developed by our team lead Deepak");
				if(devBy.version()==1.0)
					System.out.println("Expected version is 1.0 and that is found");
				else 
					System.out.println("Unexpected version by the provider...declining it");
			}
			else
				System.out.println("Ok, the code is developed by other than Deepak....declining it");
		}
		
		System.out.println("end main");

	}
}
