import {Component, Input, Output, EventEmitter} from '@angular/core';
import {PaginatedEvent} from '../paginated-event';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() events: PaginatedEvent | null = null;
  @Output() prevPage: EventEmitter<void> = new EventEmitter();
  @Output() nextPage: EventEmitter<void> = new EventEmitter();

}
