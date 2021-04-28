import { Component } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EventService} from "../event-list/event.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  form:FormGroup;

  constructor(private fb:FormBuilder,
              private authService: AuthService,
              private router: Router) {

    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      c_password: ['', Validators.required],
    });
  }


  register() {
    const val = this.form.value
    if (!this.form.valid) {
      return;
    }
    this.authService.register(val.firstname, val.lastname, val.username, val.email, val.password, val.c_password).subscribe()
    this.router.navigateByUrl('/dashboard');
  }

}
