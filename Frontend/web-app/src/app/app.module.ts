import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ReminderComponent } from './reminder/reminder.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ReminderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
        { path: '', component: LoginComponent },
        { path: 'reminder', component: ReminderComponent },
        { path: 'register', component: RegisterComponent }
      
      ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
