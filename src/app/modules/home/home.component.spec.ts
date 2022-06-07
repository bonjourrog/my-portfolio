import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserInfoMock } from 'src/app/mocks/userInfoMock';
import { HomeService } from 'src/app/services/homeService/home.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let homeService: HomeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
    homeService = TestBed.inject(HomeService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Home component', ()=>{
    it('ngOnInit', ()=>{
      component.ngOnInit()
      expect(component.userInfo).toEqual(UserInfoMock)
    });
  });
});
