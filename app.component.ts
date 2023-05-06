import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { UserDetails } from './user/UserDetails';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyconverterService } from './currencyconverter.service';
import { PayeeManagementService } from './payee/payee-management.service';
import { Payee } from './payee/Payee';
       
@Component({
  selector: 'app-root',
 /* template: `<h1> Welcome to {{title}} </h1>
        <h2>Hyderabad</h2>
        <h3>Banking Made Easy</h3>
    ` ,*/
  templateUrl: 'app.component.html' ,
  styles : ['h1 { color:red}'],

})
export class AppComponent   implements OnInit {
  title = 'SBI'; //controller  localhost:4200
 
  userObj = new UserDetails();

  constructor(
    private ccs:CurrencyconverterService,
    private pms: PayeeManagementService
  ) 
  {
    this.userObj.username="Jack";
    this.userObj.password="Jack123";
    this.userObj.age=23;
    this.userObj.address="Hyderabad";
    this.userObj.loginStatus=true; 
  } 
  payeeList!: Payee[];

  ngOnInit(): void {
    this.payeeList = this.pms.getAllPayees();
  }
  
  src : string="";
  trg : string="";
  amt : number=0;
  
  convertIt() { //a local convert is calling service's convert
    this.ccs.convert(this.src,this.trg,this.amt);
  }

  localPayee: Payee = new Payee();

  addThePayee() {
    this.pms.addPayee(this.localPayee);
  }

  // showAllThePayees() {
    
  // }
}









/*
currentItem: string="Television from Parent";

  
  
  ngOnInit(): void {
    console.log('1.AppComponent:ngOnInit()')
  }
  ngOnChanges(){
    console.log('2.AppComponent:ngOnChanges()')
  }
  ngDoCheck(): void {
    console.log('3.AppComponent:ngDoCheck()')
  }
  ngAfterContentInit() {
    console.log('4.AppComponent:ngAfterContentInit()')

  }

  ngAfterContentChecked() {
    console.log('5.ChildAppComponentComponent:ngAfterContentChecked()')
  }

  ngAfterViewInit() {
    console.log('6.AppComponent:ngAfterViewInit()')

  }
  ngAfterViewChecked() {
    console.log('7.AppComponent:ngAfterViewChecked()')

  }

  ngOnDestroy() {
    console.log('8.AppComponent:ngOnDestroy()')
  }
  */