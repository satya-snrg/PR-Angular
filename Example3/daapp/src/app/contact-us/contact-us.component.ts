import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  model ={name:'',email: ''};

  constructor() {

   }

  ngOnInit(): void {
  }

  submitForm(){

    //todo submit values to server

    console.log(this.model);
    alert("form submitted");
  }

}
