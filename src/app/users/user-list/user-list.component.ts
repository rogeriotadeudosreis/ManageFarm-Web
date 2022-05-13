import { Component, OnInit } from '@angular/core';

import { UserDto } from './../../models/user-dto';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  usuarios: UserDto[] = [
    {id:1, name:'Rogério Tadeu dos Reis', username:'rogerio@gmail.com', isActive: true, 
    profiles:[{id:1, nome: 'Admin'}], initialDate: new Date() }
  ];
  displayedColumns = ['name', 'username', 'isActive', 'profiles', 'initialDate' ]

  

  constructor() { }

  ngOnInit(): void {
  }

}
