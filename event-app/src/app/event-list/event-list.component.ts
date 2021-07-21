import {Component, Inject, OnInit} from '@angular/core';
import { EventService} from './event.service';
import {PaginatedEvent} from '../paginated-event';
import {FormControl} from "@angular/forms";
import {BehaviorSubject, combineLatest, interval, merge, Observable, of, timer} from "rxjs";
import {debounceTime, distinctUntilChanged, map, switchMap, tap} from "rxjs/operators";
import {MY_TOKEN} from "./token";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {


  public myControl: FormControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three', 'Four'];
  filteredOptions: Observable<Array<string>> = this.myControl.valueChanges.pipe(
    debounceTime(1000),
    distinctUntilChanged(),
    tap((value) => console.log(value)),
    switchMap((value: string) => of(this.options.filter((option: string) => (option.toLowerCase().includes(value.toLowerCase())))))
  )


  events: PaginatedEvent | null = null;


  constructor(private eventService: EventService, @Inject(MY_TOKEN) private myToken: string) {
    console.log(myToken);
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
    this.filteredOptions.subscribe((value) => {
      console.log(value)
    })
    const string$ = new BehaviorSubject('Hallo');
    const merged$ = merge(interval(1000), string$.asObservable());
    //merged$.subscribe((value) => (console.log(value)));

    const combined$ = combineLatest([interval(1000), string$.asObservable()]);
    combined$.subscribe({next: value => console.log(value)});
    timer(5000).pipe(tap(() => (string$.next('world')))).subscribe();


  }

}
