import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
        { path: '', component: LoginComponent },
        { path: 'register', component: RegisterComponent }
      
      ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
