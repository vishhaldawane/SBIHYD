import { Injectable } from '@angular/core';
import { Payee } from './Payee';

@Injectable({
  providedIn: 'root'
})
export class PayeeManagementService {

  payeeList: Payee[]=[ //we can fetch it from the realtime API calls from the backend
    {payeeId:1,payeeName:'Jack',payeeIFSC:'SBI000123123',payeeNickName:'jacky1'},
    {payeeId:2,payeeName:'Jane',payeeIFSC:'SBI000123523',payeeNickName:'jane2'},
    {payeeId:3,payeeName:'Julie',payeeIFSC:'SBI000126123',payeeNickName:'julie3'},
  ]
  constructor() { }
  
  //localPayee: Payee=new Payee(); //for [(ngModel)]

  addPayee(argPayee: Payee) {
    console.log('addPayee() is adding a new Payee');
    this.payeeList.push(argPayee);
  }

  getAllPayees() : Payee[] {
    console.log('getAllPayees() fetching all the payees');
    return this.payeeList; 
  }
}
