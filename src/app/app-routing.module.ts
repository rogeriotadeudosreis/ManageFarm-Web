import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserFormComponent } from './users/user-form/user-form.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserLoginComponent } from './users/user-login/user-login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },

  { path: 'new', component: UserFormComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'usuarios', component: UserListComponent },

  // {
  //   path: 'users',
  //   loadChildren: () => import('./users/users.module').then(mod => mod.UsersModule),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
