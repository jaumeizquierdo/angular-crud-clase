import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.getLogged()); // observable hot

  public data: any;

  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  registerUser$(name: string, email: string, password: string) {
    return this.http.post('http://localhost:3000/users', {
      name, email, password
    }, { headers: this.headers });
  }

  loginUser$(email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/login', {
      email, password
    }, { headers: this.headers }).pipe(tap(data => {
      localStorage.setItem('isLogged', 'true');
      this.isLogged.next(true);
      return data}),
      catchError(error => {console.log(error);
                         return throwError(error); }));
  }

  public setToken(token): void {
    localStorage.setItem('accessToken', token);
  }

  logoutUser() {
    localStorage.removeItem('accessToken');
  }

  public getToken(token) {
    const accessToken = localStorage.getItem('accesToken');
    if (!(accessToken === undefined || accessToken === null)) {
      return accessToken;
    } else {
      return null;
    }
  }

  getLogged():boolean {
    if (localStorage.getItem('isLogged') === 'true'){
      return true;
    } else {return false};

    /* localStorage.set Item("isLogged", this.user.username);
    this.userType.next(this.user.username);
    this._router.navigate(['/Admin']);
    return true; */
   }
}
