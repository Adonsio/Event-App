import { Component, OnInit } from '@angular/core';
import { EventService} from "./event.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: any[];

  constructor(private eventService: EventService, private router: Router) {
    this.events = [];
  }
  create(){
    this.router.navigateByUrl('/event/create')
  }

  edit(id: number){
    this.router.navigateByUrl(`/event/${id}/edit`)
  }

  show(id: number){
    this.router.navigateByUrl(`/event/${id}`)
  }

  ngOnInit() {
    this.eventService.getEvents().subscribe((events: any) => {
        this.events = events.data
    })
  }

}
