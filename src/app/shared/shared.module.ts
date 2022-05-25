import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { AppMaterialModule } from './app-material/app-material.module';
import { CustomSnackBarComponent } from './snack-bar/custom-snack-bar/custom-snack-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [ 
    CustomSnackBarComponent, HeaderComponent, FooterComponent, NavComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    MatIconModule
  ],
  exports:[
    CustomSnackBarComponent,
    AppMaterialModule,
    HeaderComponent,
    FooterComponent,
    NavComponent
  ]
})
export class SharedModule { }
