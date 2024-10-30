import { Component } from '@angular/core';
import { LoginService } from '../../../service/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login = {
    username: '',
    password: ''
  };
  

  constructor(private loginService: LoginService, private router: Router) {}

  getFashion() {
    this.loginService.loginUser(this.login).subscribe(
      (response: any) => {
        console.log('Login successful', response);
        this.router.navigate(['/fashions']); 
      },
      (error: any) => {
        console.error('Login failed', error);
        alert('Invalid username or password'); 
      }
    );
  }
}
