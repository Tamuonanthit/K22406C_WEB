import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3002/login'; 

  constructor(private http: HttpClient) {}

  loginUser(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, credentials, { withCredentials: true });
  }
}