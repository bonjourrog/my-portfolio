import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html'
})
export class PictureComponent implements OnInit {
  @Input() image!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
