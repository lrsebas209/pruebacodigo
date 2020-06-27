import { Component, OnInit } from '@angular/core';
import { AppiServiceService } from '../appi-service.service';
import { Observable } from 'rxjs';
import { Users } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: any;
  private pass: any;
  Users: Observable<Users[]>;
  constructor(private router: Router, private api: AppiServiceService) { 
    this.getUsers();

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
  login(user, pass){
    console.log("se presiono")
    this.router.navigateByUrl('/reminder');
  }

}
