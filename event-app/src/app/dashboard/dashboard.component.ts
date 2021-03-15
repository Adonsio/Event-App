import { Component, OnInit } from '@angular/core';
import {EventService} from "../event-list/event.service";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  events: any = [];
  user: any = [];
  constructor(private eventService: EventService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.getUser()
    this.getEvents()
  }

  getEvents(){
    this.eventService.getUserEvents().subscribe(

      (events: any) => (this.events = events)
    );
  }

  getUser(){
    this.authService.getUser().subscribe(
      (user: any) => this.user = user
    )
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

  delete(id: number, index: number){
    this.eventService.delete(id).subscribe()
    this.getEvents()
  }
}
