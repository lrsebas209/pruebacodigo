import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reminder } from '../reminder';
import { AppiServiceService } from '../appi-service.service';


@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css'],
  
})
export class ReminderComponent implements OnInit {

  private title: any;
  private date: any;
  private descrip: any;

  Reminders: Observable<Reminder[]>;

  reminder = [{title: 'title'}, {date: 'date'}, {text: 'text'}];
  constructor(private api: AppiServiceService) { 
    this.getReminders();
  }

  ngOnInit(): void {
  }
  getReminders = () => {
    this.api.getReminder().subscribe(
      data => {
        this.Reminders = data
      },
      error => {
        console.log(error);
      }
      

    )
  }

  Save(title, date, descrip){
    
  }
  Show(){

  }
 
}
