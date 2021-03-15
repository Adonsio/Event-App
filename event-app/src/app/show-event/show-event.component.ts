import { Component, OnInit } from '@angular/core';
import {EventService} from "../event-list/event.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.scss']
})
export class ShowEventComponent implements OnInit {

  currentEvent: any = [];

  constructor(private eventService: EventService,private route: ActivatedRoute) { }

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
}
