import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'managefarm-web';
  titleToolBar = 'ManageFarm - Gerenciamento'

  constructor(private router: Router, private route: ActivatedRoute) {}

  onLogin() {
    this.router.navigate(['login'], { relativeTo: this.route });
  }
}
