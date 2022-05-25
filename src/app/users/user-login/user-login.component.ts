import { SnackBarService } from 'src/app/shared/snack-bar/custom-snack-bar/snack-bar.service';
import { UserService } from 'src/app/services/user.service';
import { UserLogin } from './../../models/user-login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBarService: SnackBarService
  ) {
    this.form = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onLogin() {
    if (!this.form.valid) {
      this.snackBarService.showAlert('Existem campos não preenchidos. Preencha os mesmo por favor.')
    }
    const user = this.form.getRawValue() as UserLogin;
    this.userService.login(user).subscribe(
      () => {
        // this.snackBarService.showSuccess('Login com sucesso!');
        this.form.reset();
        this.router.navigate(['/home'])
      },
      (err) => {
        this.snackBarService.showError('Erro ao salvar este registro', err);
      }
    );
  }

  onCancel() {
    this.form.reset();
  }
}
