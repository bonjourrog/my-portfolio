import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectDetailsRoutes } from './projectsDetails.routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ProjectDetailsRoutes)
  ]
})
export class ProjectDetailsModule { }
