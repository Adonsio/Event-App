import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {PaginatedEvent} from '../paginated-event';
import {EventService} from "../event-list/event.service";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() events: PaginatedEvent;
  // tslint:disable-next-line:no-output-rename
  @Output('prevPage') prevPage: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line:no-output-rename
  @Output('nextPage') nextPage: EventEmitter<any> = new EventEmitter();
  constructor(private eventService: EventService) {
    // @ts-ignore
    this.events = eventService.getEvents();


  }
  pPage(): any{
    this.prevPage.emit();
  }

  nPage(): any{
    this.nextPage.emit();
  }

  ngOnInit(): void {
  }

}
