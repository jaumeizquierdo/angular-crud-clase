import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [NavbarComponent, NotfoundComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [NavbarComponent, NotfoundComponent, HomeComponent]
})
export class CommonsModule { }
