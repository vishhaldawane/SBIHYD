import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register3',
  templateUrl: './register3.component.html',
  styleUrls: ['./register3.component.css']
})
export class Register3Component implements OnInit {

  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }

  agePattern='[0-9][0-9]'//regex should be compatible across all the OS
  //emailPattern='^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$'
  emailPattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  registerForm = new FormGroup({ // a container for holding your form entires
    fname: new FormControl('',[Validators.required, Validators.maxLength(32)]), // individual element/field
    lname: new FormControl('',[Validators.required, Validators.maxLength(32)]),
    age: new FormControl('',[Validators.required,Validators.max(60), Validators.min(18), Validators.pattern(this.agePattern)]),
    mobile: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    email: new FormControl('',[Validators.required, Validators.maxLength(32),Validators.pattern(this.emailPattern)]),
    password: new FormControl('',[Validators.required,Validators.maxLength(32),Validators.minLength(8)]),
    confirmPassword: new FormControl('',[Validators.required, Validators.maxLength(32),Validators.minLength(8)]),
    acceptTerms: new FormControl('')
  });

  getControl(name:any) : AbstractControl | null{
    return this.registerForm.get(name);
  }
  registerTheForm() {
    this.submitted = true;
    if(this.registerForm.invalid) {
      return;
    }
    console.log('registerTheForm() invoked ',this.registerForm.value);
  }

  onReset()  {
    this.submitted=false;
    this.registerForm.reset();
  }

}
