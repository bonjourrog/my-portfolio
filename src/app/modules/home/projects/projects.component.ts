import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/userInfo';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [
  ]
})
export class ProjectsComponent implements OnInit {

  @Input() projects!:Project[];

  constructor() { }

  ngOnInit(): void {
  }

}
