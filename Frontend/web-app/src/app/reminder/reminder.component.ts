import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reminder } from '../reminder';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css'],
  providers: [ApiService]
})
export class ReminderComponent implements OnInit {

  private title: any;
  private date: any;
  private descrip: any;

  Reminders: Observable<Reminder[]>;

  reminder = [{title: 'title'}, {date: 'date'}, {text: 'text'}];
  constructor(private _http:HttpClient) { 
   
  }

  ngOnInit(): void {
  }
  Save(title, date, descrip){
    
  }
  Show(){

  }
 
}
