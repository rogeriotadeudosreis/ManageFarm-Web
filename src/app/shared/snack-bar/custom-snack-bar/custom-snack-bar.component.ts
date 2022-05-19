import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

import { SnackBarType } from './snack-bar.service';

@Component({
  selector: 'app-custom-snack-bar',
  templateUrl: './custom-snack-bar.component.html',
  styleUrls: ['./custom-snack-bar.component.scss']
})
export class CustomSnackBarComponent implements OnInit {

  icon: string;
  snackTypes = SnackBarType;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
      this.icon = this.getIconName();
  }

  ngOnInit(): void {
  }

  private getIconName(): string {
      switch (this.data.snackType as SnackBarType) {
          case SnackBarType.SUCCESS:
              return 'done';
          case SnackBarType.ERROR:
              return 'error';
          case SnackBarType.ALERT:
              return 'warning';
          case SnackBarType.NORMAL:
              return 'info';
      }
  }

}
