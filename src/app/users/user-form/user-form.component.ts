import { SnackBarService } from 'src/app/shared/snack-bar/custom-snack-bar/snack-bar.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Perfil } from 'src/app/models/perfil';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  formUser: FormGroup;
  profile: Perfil[] = [];
  profilesSelecionado: Perfil[] = [];
  dataSourceProfiles = new MatTableDataSource<Perfil[]>([]);

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBar: SnackBarService
  ) {
    this.formUser = this.formBuilder.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      userName: ['', [Validators.required, Validators.minLength(11)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['',[Validators.required]],
    });
  }

  ngOnInit(): void {}

 
  
 
}
