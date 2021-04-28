import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {EventService} from "../event-list/event.service";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {

  form:FormGroup;

  constructor(private fb:FormBuilder,
              private eventService: EventService,
              private router: Router,
              private authService: AuthService) {

    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      excerpt: ['', Validators.required],
      size: ['', Validators.required],
      start_date: ['', Validators.required],
    });
  }


  submit() {
    const val = this.form.value
    if (!this.form.valid) {
      return;
    }
    let user_id = this.authService.getUserID()
    this.eventService.store(val.name, val.description, val.excerpt, val.size, val.start_date, user_id).subscribe()
    this.router.navigateByUrl('/dashboard')
  }

}
