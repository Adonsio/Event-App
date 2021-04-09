import { Component, OnInit } from '@angular/core';
import { EventService} from './event.service';
import {Router} from '@angular/router';
import {PaginatedEvent} from '../paginated-event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: PaginatedEvent | null = null;

  constructor(private eventService: EventService, private router: Router) {
  }
  create(): void{
    this.router.navigateByUrl('/event/create');
  }

  edit(id: number): void{
    this.router.navigateByUrl(`/event/${id}/edit`);
  }

  show(id: number): void{
    this.router.navigateByUrl(`/event/${id}`);
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
