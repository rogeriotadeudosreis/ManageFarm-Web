import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

import { UserDtoLogado } from './models/user-dto-logado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'managefarm-web';
  titleToolBar = 'ManageFarm - Gerenciamento';

  user$: Observable<UserDtoLogado>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.user$ = userService.getUser();
  }

  onLogin() {
    this.router.navigate(['login'], { relativeTo: this.route });
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
