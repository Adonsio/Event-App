import { Component } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent  {

  constructor(private authService: AuthService, private router: Router) {
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

}
