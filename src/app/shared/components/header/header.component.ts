import { Route, Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserDtoLogado } from 'src/app/models/user-dto-logado';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'ManageFarm - Gerenciamento';

  user$: Observable<UserDtoLogado>;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.user$ = userService.getUser();
  }

  ngOnInit(): void {}

  onLogin() {
    this.router.navigate(['login'], { relativeTo: this.route });
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
