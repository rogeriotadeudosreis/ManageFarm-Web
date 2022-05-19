import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiError } from 'src/app/models/api-error';

import { CustomSnackBarComponent } from './custom-snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private matSnack: MatSnackBar) {
  }

  public show(mensagem: string, snackType = SnackBarType.NORMAL, duracaoEmMs = 5000,
              posicaoHorizontal = SnackBarHorizontalPosition.END,
              posicaoVertical = SnackBarVerticalPosition.TOP): void {
      this.matSnack.openFromComponent(CustomSnackBarComponent, {
          duration: duracaoEmMs,
          horizontalPosition: posicaoHorizontal,
          verticalPosition: posicaoVertical,
          data: {mensagem: mensagem, snackType: snackType},
          panelClass: snackType
      });
  }

  public showAlert(mensagem: string): void {
      this.show(mensagem, SnackBarType.ALERT, 10000);
  }

  public showError(mensagem: string, error: ApiError): void {
      if (error != null && error.errors && error.errors.length > 0 ) {
          let errorMessage = '';
          error.errors.forEach(item => errorMessage += `${item}\n`);
          this.show(errorMessage, SnackBarType.ERROR, 10000);
      } else {
          this.show(mensagem, SnackBarType.ERROR, 10000);
      }
  }

  public showSuccess(mensagem: string): void {
      this.show(mensagem, SnackBarType.SUCCESS);
  }
}

export enum SnackBarType {
  ERROR = 'error',
  ALERT = 'alert',
  SUCCESS = 'success',
  NORMAL = 'normal'
}

export enum SnackBarHorizontalPosition {
  START = 'start',
  CENTER = 'center',
  END = 'end',
  LEFT = 'left',
  RIGHT = 'right'
}

export enum SnackBarVerticalPosition {
  TOP = 'top',
  BOTTOM = 'bottom'
}
