import { Component, OnInit } from '@angular/core';
import { EventService} from './event.service';
import {PaginatedEvent} from '../paginated-event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: PaginatedEvent | null = null;

  constructor(private eventService: EventService) {
  }

prevPage(): void{
  if (!this.events){
    return;
  }
  this.eventService.getEventPage(this.events.prev_page_url).subscribe((events: PaginatedEvent) => {
    this.events = events;
  });
}

nextPage(): void{
  if (!this.events){
    return;
  }
  this.eventService.getEventPage(this.events.next_page_url).subscribe((events: PaginatedEvent) => {
    this.events = events;
  });
}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((events: PaginatedEvent) => {
        this.events = events;
    });
  }

}
