import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppiServiceService {
  private baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  getReminder(): Observable<any>{
    return this.http.get(this.baseUrl + '/Reminder/' , {headers: this.httpHeaders});
  }
  getUsers(): Observable<any>{
    return this.http.get(this.baseUrl + '/Users/' , {headers: this.httpHeaders});
  }
  createUser(user): Observable<any> {
    const body = {name: user.name, password: user.password};
    return this.http.post(this.baseUrl + '/Users/', body , {headers: this.httpHeaders});
  }
  createReminder(reminder): Observable<any> {
    const body = {title: reminder.title, date: reminder.date, text: reminder.text};
    return this.http.post(this.baseUrl + '/Reminder/', body , {headers: this.httpHeaders});
  } 
}


