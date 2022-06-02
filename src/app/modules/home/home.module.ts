import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routes';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes)
  ]
})
export class HomeModule { }
