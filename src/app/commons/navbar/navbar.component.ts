import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLogged = false;

  constructor(private authService: AuthService, private router: Router) { }

  public onLogout(): void {
    this.authService.logoutUser();
    this.isLogged = false;
    //this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.onCheckUser();
  }

  public onCheckUser(): void {
    this.authService.isLogged.subscribe(value => this.isLogged = value);
  }

}
