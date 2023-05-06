import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApplicantDetails } from './ApplicantDetails';

@Component({
  selector: 'app-bank-account-applicant-form',
  templateUrl: './bank-account-applicant-form.component.html',
  styleUrls: ['./bank-account-applicant-form.component.css']
})
export class BankAccountApplicantFormComponent implements OnInit {

  countryList=["India","UK","USA","Germany","France","Brazil"];
  
  applicantDetails : ApplicantDetails = new ApplicantDetails();

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit() called');
    this.applicantDetails.firstName="JACK";
    this.applicantDetails.lastName="DSOUZA";
    this.applicantDetails.gender="Male";
    this.applicantDetails.email="jack@gmail.com";
    this.applicantDetails.country="India";
    this.applicantDetails.address.city="Mumbai";
    this.applicantDetails.address.street="West Avenue";
    this.applicantDetails.address.pin=400016;
  }

  onSubmit(regForm: NgForm) {
    //console.log('ngSubmit() invoked...',regForm);
    console.log('ngSubmit() invoked...',regForm.value);

  }
  resetForm(regForm: NgForm) {
  //  regForm.resetForm();
      regForm.resetForm( {
        firstName:"TestUser", address: {
          city:"Hyderabad"
        }
      })
  }
}
