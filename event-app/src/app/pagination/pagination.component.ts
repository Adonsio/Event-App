import { Component, OnInit, Input } from '@angular/core';
import {PaginatedEvent} from '../paginated-event';
import {EventService} from "../event-list/event.service";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() events: PaginatedEvent;

  constructor(private eventService: EventService) {
    // @ts-ignore
    this.events = eventService.getEvents();
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

  ngOnInit(): void {
  }

}
