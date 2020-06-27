import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  private baseUrl = 'http://localhost:8000/Reminders';

  constructor(private http: HttpClient) { }
}
