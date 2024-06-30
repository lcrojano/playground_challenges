import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule, RouterModule,ButtonModule
  ],
  exports: [
    DefaultComponent
  ]
})
export class ThemeModule { }
