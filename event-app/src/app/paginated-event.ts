import {Event} from './event';
export interface PaginatedEvent {
  current_page: number;
  data: Event[];
  from: number;
  last_page: number;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}
