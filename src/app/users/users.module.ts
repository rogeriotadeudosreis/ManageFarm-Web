import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserLoginComponent } from './user-login/user-login.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
