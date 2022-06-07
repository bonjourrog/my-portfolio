import { Component, Input, OnInit } from '@angular/core';
import { Description } from 'src/app/models/userInfo';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html'
})
export class PresentationComponent implements OnInit {
  @Input("description") description!:Description[];
  @Input("name") name!:string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.description);
    
  }

}
