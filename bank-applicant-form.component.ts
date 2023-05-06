import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bank-applicant-form',
  templateUrl: './bank-applicant-form.component.html',
  styleUrls: ['./bank-applicant-form.component.css']
})
export class BankApplicantFormComponent implements OnInit {

  constructor() { }

  applicant: Applicant = new Applicant();

  ngOnInit(): void {
    this.applicant.firstName="TestFirstName";
   // this.applicant.lastName="TestLastName"
   this.applicant.country="India";
   this.applicant.address.city="Hyderabad";
  }

  countries = ["India","UK","USA","GERMANY","FRANCE"];

  userForm: any;

  onSubmit(regForm: NgForm) {
    console.log('OnSumit() invoked : ',regForm.value);
  }
  resetIt(regForm: NgForm) {
   // regForm.resetForm(); //full form reset
   regForm.resetForm({ //partil reset
    firstName:'SampleUser', address : { city: 'SampleCity'}
   })
  }
}

export class Applicant {  //must be in a separate ts file
  firstName : string="";
  lastName : string="";
  email: string="";
  gender:string="";
  country:string="";
  address:Address = new Address();


}

class Address { //must be in a separate ts file
  city:string="";
  street:string="";
  pin:string="";
}
