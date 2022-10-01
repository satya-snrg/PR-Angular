import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user ={name:'',email: '',phone: '', pwd:''};

  constructor() {

   }

  ngOnInit(): void {
  }

  submitForm(){
    //todo submit values to server
    console.log(this.user);
    alert("form submitted");
  }
}