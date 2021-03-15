import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {shareReplay, tap} from "rxjs/operators";
import {Token} from "@angular/compiler";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: any = {};

  constructor(private http: HttpClient) {

  }
  private apiUrl = "http://localhost/api/";
  login(email:string, password:string ) {
    return this.http.post<any>( `${this.apiUrl}login`  , {email, password}).pipe(
      tap((response => (this.storeToken(response.data.token), this.setUser(response.data.user), console.log(response.data.user))))
    );
  }
  register(firstname:string, lastname:string, username:string, email:string, password:string, c_password:string) {
    return this.http.post<any>( `${this.apiUrl}register`  , {firstname,lastname,username,email, password, c_password}).pipe(
      tap((response => (this.storeToken(response.data.token), this.setUser(response.data.user), console.log(response.data.user))))
    );
  }
  logout(){
      this.removeToken()
  }

  storeToken(token: string){
    localStorage.setItem('JWT_TOKEN', token);
  }

  setUser(user: any){
    localStorage.setItem('user', user.id)
  }

  getUser(){
    return this.http.get(`${this.apiUrl}user/${this.getUserID()}`)
  }

  getUserID(){
    return localStorage.getItem('user')
  }


  getToken(): any{
    return localStorage.getItem('JWT_TOKEN')
  }

  removeToken(){
    localStorage.removeItem('JWT_TOKEN')
  }

  isLoggedIn(){
    if (!this.getToken()){
      return false
    }
    return true
  }
}
