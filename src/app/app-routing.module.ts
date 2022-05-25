import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/authGuard';

import { UserFormComponent } from './users/user-form/user-form.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserLoginComponent } from './users/user-login/user-login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },

  { path: 'home', component: AppComponent },
  { path: 'new', component: UserFormComponent },
  { path: 'login', component: UserLoginComponent, canActivate: [AuthGuard] },
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
