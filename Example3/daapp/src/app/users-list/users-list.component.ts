import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users:any = [];

  constructor() {

    this.users = [
      {'name':'alex','email':'alex@test.com','phone':'234234234'},
      {'name':'benn','email':'benn@test.com','phone':'223423422'}
    ];

   }

  ngOnInit(): void {

  }

}
