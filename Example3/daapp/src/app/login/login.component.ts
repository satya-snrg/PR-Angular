import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user ={email: '', pwd:''};
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  loginForm(){

    let email = this.user.email;
    let pwd = this.user.pwd;

    if(email =="admin" && pwd=="admin"){
        localStorage.setItem('loggedUser','admin');
        this.router.navigate(['/admin-home']);

    }else{
      localStorage.setItem('loggedUser','guest');
      this.router.navigate(['/guest-home']);

    }

    //todo submit values to server

    console.log(this.user);
    alert("form submitted");
  }

}
