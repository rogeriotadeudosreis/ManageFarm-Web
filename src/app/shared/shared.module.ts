import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { AppMaterialModule } from './app-material/app-material.module';
import { CustomSnackBarComponent } from './snack-bar/custom-snack-bar/custom-snack-bar.component';



@NgModule({
  declarations: [ 
    CustomSnackBarComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    MatIconModule
  ],
  exports:[
    CustomSnackBarComponent,
    AppMaterialModule
  ]
})
export class SharedModule { }
