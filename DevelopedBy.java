package com.sbi;

import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;
@Retention(RUNTIME) //this annotation is available at the runtime
@Target(TYPE) //this annotation is made for the class
public @interface DevelopedBy {
	String name(); //@interface is used to create used defined annotations
	double version();
}
