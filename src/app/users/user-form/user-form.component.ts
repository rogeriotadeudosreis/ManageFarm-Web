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
  profileArraySelected: Perfil[] = [];
  profileSelected: any;
  dataSourceProfile = new MatTableDataSource<Perfil>([]);

  listProfiles: Perfil[] = [
    {id: 1, nome: 'Administrador'},
    {id: 2, nome: 'Cliente'},
    {id: 3, nome: 'Usuário'}
  ]

  displayedColumns = [
    'id',
    'nome',
    'actions'
  ];

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
      username: ['', [Validators.required, Validators.minLength(11)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required]],
      profiles: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  addProfiles(perfil: any): void {
    if (this.profileSelected != undefined && this.profileSelected !== '') {
      this.profileArraySelected.push(this.profileSelected);
      this.dataSourceProfile = new MatTableDataSource(this.profileArraySelected);
    }
    this.profileSelected = "Selecione o Perfil do Usuário"
  }

  onSave() {
    // if (this.formUser.invalid) {
    this.snackBarService.showAlert(
      'O formulário possui campos obrigatório(s) não preenchidos.'
    );
    // } else {
    const user = this.formUser.getRawValue() as User;
    user.profiles = this.profileArraySelected;
    this.userService.save(user).subscribe(
      () => {
        this.snackBarService.showSuccess('Registro salvo com sucesso'!);
        this.formUser.reset();
        this.router.navigate(['']);
      },
      (err) => {
        this.snackBarService.showError('Erro ao salvar este registro', err);
      }
    );
    // }
  }
}
