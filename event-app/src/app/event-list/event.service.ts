import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {AuthService} from "../auth/auth.service";
@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = "http://localhost/api/";
  constructor(
    private http: HttpClient,
    private authService: AuthService) { }
  getEvents(): Observable<Object[]> {
    return this.http.get<Object[]>(`${this.apiUrl}events`)
  }
  getEvent(id: number): Observable<Object[]> {
    return this.http.get<Object[]>(`${this.apiUrl}events/${id}`)
  }
  store(name:string, desc:string, excerpt:string, size:number, start_date:string, user_id: any ) {
    return this.http.post<any>( `${this.apiUrl}events`  , {name, desc,excerpt,size,start_date, user_id});
  }

  update(id:number,name:string, desc:string, excerpt:string, size:number, start_date:string ) {
    return this.http.put(`${this.apiUrl}events/${id}`, {name, desc,excerpt,size,start_date});
  }

  getUserEvents(){
    return this.http.get(`${this.apiUrl}user_events/${this.authService.getUserID()}`)
  }

  delete(id: number){
    return this.http.delete(`${this.apiUrl}events/${id}`)
  }

}
