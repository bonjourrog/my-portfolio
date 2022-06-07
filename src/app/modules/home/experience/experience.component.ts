import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/userInfo';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent implements OnInit {
  @Input() experience!:Experience[];

  constructor() { }

  ngOnInit(): void {
  }

}
