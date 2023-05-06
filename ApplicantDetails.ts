import { Address } from "./Address";

export class ApplicantDetails {
    firstName:string="";
    lastName:string="";
    email:string="";
    gender:string="";
    country:string="";
    address: Address = new Address(); 
}