import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {AuthService} from "../auth/auth.service";
import {MatToolbarModule} from "@angular/material/toolbar";
import {CommonModule} from "@angular/common";

const AuthServiceStub: Partial<AuthService> = {
  isLoggedIn: () => false
};

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let service: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, MatToolbarModule, CommonModule],
      declarations: [ NavComponent ],
      providers: [ {provide: AuthService, useValue: AuthServiceStub} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    service = TestBed.get(AuthService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('User should not be logged it and show Login and Register', () => {
    spyOn(service, "isLoggedIn").and.returnValue(false);
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('div.navbar-links').textContent).toContain('Login');
    expect(fixture.debugElement.nativeElement.querySelector('div.navbar-links').textContent).toContain('Register');
  });

  it('should set user to logged in', function () {
    spyOn(service, "isLoggedIn").and.returnValue(true);
    fixture.detectChanges();
    expect(component.isLoggedIn()).toBeTrue();
    expect(fixture.debugElement.nativeElement.querySelector('div.navbar-links').textContent).toContain('Logout');
  });
});
