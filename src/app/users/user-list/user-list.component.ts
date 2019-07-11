import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {

  public users: any;
  public data: any;

  constructor(private api: ApiService) { }

  getUsers() {
    this.api.getUsers$().subscribe(response => {
      console.log(response);
      this.users = response;
    });
  }

  deleteUser(id: string) {
    this.api.deleteUser$(+id).subscribe(data => {
    this.data = data;
    this.getUsers(); });
  }

  ngOnInit() {
    this.getUsers();
  }

}
