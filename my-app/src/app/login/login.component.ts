import { Component } from '@angular/core';
import { LoginService } from '../../../service/login.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginData = { username: '', password: '' };
  message = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getLoginFromCookie(); 
  }

  login() {
    this.http.post('http://localhost:3002/login', this.loginData, { withCredentials: true })
      .subscribe((res: any) => {
        this.message = res.message;
      }, error => {
        this.message = error.error.message;
      });
  }

  getLoginFromCookie() {
    this.http.get('http://localhost:3002/get-login', { withCredentials: true })
      .subscribe((res: any) => {
        this.loginData.username = res.username;
        this.loginData.password = res.password;
        this.message = res.message;
      });
  }
}
