import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarService } from 'src/app/shared/snack-bar/custom-snack-bar/snack-bar.service';

import { UserDto } from './../../models/user-dto';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  datasource = new MatTableDataSource<UserDto>([]);
  usuarios: UserDto[] = [];

  displayedColumns = [
    'name',
    'username',
    'isActive',
    'profiles',
    'initialDate',
    'updateDate',
    'actions',
  ];

  constructor(
    private userService: UserService,
    private snackbarService: SnackBarService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.read().subscribe(
      (resposta: any) => {
        this.usuarios = resposta.content;
        this.datasource = new MatTableDataSource(this.usuarios);
        // this.snackbarService.showSuccess('Registro carregados com sucesso!');
      },
      (err) => {
        this.snackbarService.showError(
          'Erro ao carregar lista de usuários',
          {}
        );
      }
    );
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
