import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserInfoMock } from 'src/app/mocks/userInfoMock';
import { UserInfo } from 'src/app/models/userInfo';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getUserInfo():Observable<UserInfo>{
    return of(UserInfoMock)
  }
}
