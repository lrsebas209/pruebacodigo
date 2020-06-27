import { Component, OnInit } from '@angular/core';
import { AppiServiceService } from '../appi-service.service';
import { Observable } from 'rxjs';
import { Users } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  private user: any;
  private pass: any;
  Users: [{name: '', password: '' }];
  usercreate;
  constructor(private router: Router, private api: AppiServiceService) { 
    this.getUsers();
    this.usercreate = {name: '', password: ''};
  }

  ngOnInit(): void {
  }
  getUsers = () => {
    this.api.getUsers().subscribe(
      data => {
        this.Users = data
      },
      error => {
        console.log(error);
      }
      

    )
  }
  save = (user, pass)=> {
    this.api.createUser(this.usercreate).subscribe(
      data => {
        this.Users.push(data);
      }
    );
  }

}
