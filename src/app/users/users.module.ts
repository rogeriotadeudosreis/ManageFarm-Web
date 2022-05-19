import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserLoginComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AppMaterialModule,
    CdkTableModule,
    MatIconModule,
    ReactiveFormsModule
  ],
})
export class UsersModule {}
