import { Component, OnInit } from '@angular/core';
import { EventService} from "./event.service";
import {Router} from "@angular/router";
import {PaginatedEvent} from "../paginated-event";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: PaginatedEvent;

  constructor(private eventService: EventService, private router: Router) {
    this.events = this.getEvents();
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

  getEvents(): any{
    this.eventService.getEvents().subscribe((events: PaginatedEvent) => {
      return events;
    })
  }

prevPage(): any{
  this.eventService.getEventPage(this.events.prev_page_url).subscribe((events: PaginatedEvent) => {
    this.events = events;
  });
}

nextPage(): any{
  this.eventService.getEventPage(this.events.next_page_url).subscribe((events: PaginatedEvent) => {
    this.events = events;
  });
}
parentFun(): any {alert('parent component function.'); }

  ngOnInit() {
    this.eventService.getEvents().subscribe((events: PaginatedEvent) => {
        this.events = events;
    })
  }

}
