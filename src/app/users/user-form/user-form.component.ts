import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Perfil } from 'src/app/models/perfil';
import { UserService } from 'src/app/services/user.service';
import { SnackBarService } from 'src/app/shared/snack-bar/custom-snack-bar/snack-bar.service';

import { User } from './../../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  formUser: FormGroup;
  dataSourceProfiles = new MatTableDataSource<Perfil[]>([]);

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBarService: SnackBarService,
    private router: Router
  ) {
    this.formUser = this.formBuilder.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      userName: ['', [Validators.required, Validators.minLength(11)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required]],
      profile: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSave() {
    if (this.formUser.invalid) {
      this.snackBarService.showAlert(
        'O formulário possui campos obrigatório(s) não preenchidos.'
      );
    } else {
      const user = this.formUser.getRawValue() as User;
      this.userService.save(user).subscribe(
        () => {
          this.snackBarService.showSuccess('Registro salvo com sucesso'!);
          this.formUser.reset();
          this.router.navigate([''])
        },
        (err) => {
          this.snackBarService.showError('Erro ao salvar este registro', err);
        }
      );
    }
  }
}
