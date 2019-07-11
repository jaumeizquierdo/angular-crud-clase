import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public data: any;

  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  registerUser$(name: string, email: string, password: string) {
    return this.http.post('http://localhost/3000/users', {
      name, email, password
    }, { headers: this.headers });
  }

  loginUser$(email: string, password: string) {
    return this.http.post('http://localhost/3000/login', {
      email, password
    }, { headers: this.headers }).pipe(map(response => this.data = response));
  }
}
