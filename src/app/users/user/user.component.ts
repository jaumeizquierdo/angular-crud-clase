import { Component, OnInit } from '@angular/core';
import { ApiService, User } from 'src/app/shared/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public identifier: any;
  public user: any = { };
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(miParams => this.identifier = miParams['id']);
    this.api.getUser$(this.identifier).subscribe(response => this.user = response);

  }

}
