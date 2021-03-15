import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EventService} from "../event-list/event.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  currentEvent: any = [];

  form:FormGroup;

  constructor(private fb:FormBuilder,
              private eventService: EventService,
              private router: Router,
              private route: ActivatedRoute,) {

    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      excerpt: ['', Validators.required],
      size: ['', Validators.required],
      start_date: ['', Validators.required],
    });
  }


  ngOnInit(): void {
    this.getEvent(this.route.snapshot.params.id);
  }

  getEvent(id: number){
    this.eventService.getEvent(id).subscribe(
      data =>  {
        this.currentEvent = data;
        console.log(data);
      }
    )
  }

  update(id: number){
    const val = this.form.value
    if (!this.form.valid) {
      return;
    }
    this.eventService.update(id, val.name, val.description, val.excerpt, val.size, val.start_date).subscribe()
  }

}
