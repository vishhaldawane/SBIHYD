import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pan-verify',
  templateUrl: './pan-verify.component.html',
  styleUrls: ['./pan-verify.component.css']
})
export class PanVerifyComponent  {

  title = 'template-driven-form';

  form = {
    fname : '',
    lname : '',
    pan : '',
    mobile : '',
    email : '',
    age : ''
  }

  integerRegex = /^\d+$/
  emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  panRegex = /[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}/

  registerFn(){
    console.log(this.form)
  }
}
