import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register3',
  templateUrl: './register3.component.html',
  styleUrls: ['./register3.component.css']
})
export class Register3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({ // a container for holding your form entires
    xname: new FormControl(''), // individual element/field
    lname: new FormControl(''),
    age: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  registerTheForm() {

  }

}
