import { Component, OnInit } from '@angular/core';
import { Description, UserInfo } from 'src/app/models/userInfo';
import { HomeService } from 'src/app/services/homeService/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  userInfo!: UserInfo;
  description!:Description[];
  constructor(
    private _homeService: HomeService
  ) { }

  ngOnInit(): void {
    this._homeService.getUserInfo().subscribe(response=>{
      if(response){
        this.userInfo = response;
        this.description = this.userInfo.description;
      }
    })
  }
}