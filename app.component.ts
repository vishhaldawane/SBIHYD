import { Component } from '@angular/core';
// appObj: = new AppComponent();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //view
  styleUrls: ['./app.component.css'] //style
})
export class AppComponent { //model+controlling logic
  name='Vishal Dawane';
  title = 'State Bank Of India, Hyderabad and Belapur'; //localhost:4200

  //int i=10;
  i: number=10;

  
   constructor() {
    console.log('AppComponents constructor invoked..')
     var rectangle = { x:10, y:20, height:50, width:90, point : { p1:100, p2:200 } };
     console.log('rectangle : ',rectangle.x, rectangle.y, rectangle.height, rectangle.width);
    var {y,x, point:{p1}} = rectangle;
    console.log(' with destructuring : ',x,y,p1);
/*
              var abc = {
                        pqr: {
                                xyz: 883
                        }
                };
*/
      //this.allNumerics(); //invokig it
      //let savObj = new SavingsAccount();
      //this.theStringFunction();
      //this.myBoolean();
     // this.emptyOrUndefinedType();
      this.anyType();
    //this.arrayType();

    var p=10;
    var q=20;
    console.log(p);
    console.log(q);
    
    [p,q] = [q,p];
    
    console.log('after',p);
    console.log('after',q);
    
    var  [x1, , ...someValues] = [100,200,300,400];
    console.log('x1:',x1);
    //console.log('y1:',y1);
    console.log('somevalue ',someValues);
    



    let add =  (x: number,y: number ) : number => {
      console.log(' arrow x '+x);
      console.log(' arrow y '+y);
      
      return x+y;
    };
    
    add(10,20);
    this.findTotal(10,20); //invoked from the ctor
    this.findTotal(10,20,30);
    this.findTotal(10,20,40,50);
   }

   findTotal(...numAry: number[]) : number {
      console.log('findTotal with length :  ',numAry.length);
      let total: number=0;
      numAry.forEach((num)=> total+=num);
      return total;
   }

   
   

   allNumerics() { //localhost:4200 - its member function
      let j: number =20;
      console.log('value  of i ',this.i);
      console.log('value  of j ',j)
      j=30;
      console.log('now value  of j ',j);
      this.i=22; // pure ints
      console.log('now value  of i ',this.i);

      let myoctalvalue: number=0o345; //any octal
      console.log('value  of myoctalvalue ',myoctalvalue);

      let mybinaryValue: number=0b110; //any binary pattern
      console.log('value  of mybinaryValue ',mybinaryValue);

      let myHex: number = 0x54CF; //hex
      console.log('value  of myHex ',myHex);

    }

    theStringFunction() {
      let str1: string ="State Bank Of India";
      console.log('str1 : ',str1);
      
      let str2: string='Hyderabad';
      console.log('str2 : ',str2);

//es5 2009
      let str3: string=str1+' is at '+str2;
      console.log('str3 : ',str3);  
    
//after es6 - 2015
      let str4: string='value is : '+`${str1} is at ${str2}`;//string literal
      console.log('str4 : ',str4);

    }
    myBoolean() {
      let isCertified: boolean=true;
      console.log('are you certified : ',isCertified);
      isCertified=false;
      console.log('are you certified : ',isCertified);
    } 
   
    emptyOrUndefinedType() {
      let emptyVar: void ; //also as a return type for a function
      console.log('empty variable : ',emptyVar);
      emptyVar=undefined; 
    
    }

    anyType() {

      let num: number=10;
      console.log(' num ',num);
      let x: any;
      console.log('after declaration : x ',typeof(x));

      x = 'jack';
      console.log(' x ',x);
      console.log('x ',typeof(x));

      num = x;

      console.log(' num ',num);
      console.log(' nums type : ',typeof(num));


    /*  
      console.log('x : ',x);
      
      x='jack';
      console.log('x : ',x);
      
      x=true;
      console.log('x : ',x);
   
      this.takeAnyType(10,20);
      this.takeAnyType(10,'Jack');
      this.takeAnyType('julie',20);
      this.takeAnyType('SBI','HYD');
*/

    }

    takeAnyType(x: any, y: any) {
      let whatsTheFirstType: string = typeof(x); //number
      let whatsTheSecondType: string = typeof(y);

      console.log(typeof(x) + ' ' + typeof(y));
      console.log('TYPE : '+whatsTheFirstType+' ' +whatsTheSecondType);  
          if(whatsTheFirstType =='number' && whatsTheSecondType=='number') {
              console.log('Numbers are passed');
          }
          else {
            console.log('Not all Numbers are passed');

          }
          console.log('x '+x);
          console.log('y '+y);      
    }

    arrayType() {
      let myScore: number[]=[10,20,30];
      console.log('myScore : '+myScore[0]);
      console.log('myScore : '+myScore[1]);
      console.log('myScore : '+myScore[2]);
      
      for(let i=0;i<myScore.length;i++) {
        console.log('value : ',myScore[i]);
      }

      myScore.forEach( //for each member of myScore this anonymous function
                            //would be invoked 
          function (val) {
                console.log('via for each : '+val);
          }
      );

         /* this.xyz();
          this.xyz();
          this.xyz();
         
          let myfun=this.xyz;

          myfun();
          myfun();
          myfun();*/
          
    }

    /*xyz() {
      console.log('my fun is invoked...');
    }*/
  /*

                    Data types in TS
                              |
                  |           |           |
              Static        Generic     Decorator (annotations)
                |             <>
            --------------------------------------------
            |                                           |
       Built in Types in Type Script                  User - Defined
       Number   String  Void    Null    Boolean       Classes
  */
}
//10(Association)pojo-repo-service-controller[dto] <-- SPRING REST API

    //[dto]controller-service-pojo

class SavingsAccount { // or inside savingsaccount.ts file

  constructor() {
    console.log('SavingsAccounts constructor invoked..')
  }
}
//int i;
// Account a = new Account

// Collection<Employee> e = new ArrayList<Executive>();

// static int i; 

let globalVar: number=0; //file level : global

class Account {
  balance: number=0;

  constructor() {
    let x: number=0;
    console.log('global ',globalVar);
    console.log('balance ',this.balance);
    console.log('x ',x);
    
  }

}

