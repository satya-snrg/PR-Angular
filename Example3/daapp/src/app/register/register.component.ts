import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  isFormSubmitted = false;
  user ={name:'',email: '',phone: '', pwd:''};

  constructor() {

   }

  ngOnInit(): void {
  }

  submitForm(){
    this.isFormSubmitted = true;
  
 }
}