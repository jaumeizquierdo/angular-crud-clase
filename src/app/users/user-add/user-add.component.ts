import { Component, OnInit } from '@angular/core';
import { User, ApiService } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  public user: User;

  public placeholder = {
    name: 'Teclea tu nombre y apellidos',
    company: 'Teclea tu nombre de usuario',
    email: 'Teclea tu email',
    address: 'Dirección',
    phone: 'teléfono',
    gender: 'M|H'
  };

  public userData = {
    id:+this.uniqueId(),
    _id:this.uniqueId(),
    name:'',
    company:'',
    email:'',
    address:'',
    phone:'',
    gender: '',
  };

    constructor(private api: ApiService, private router: Router) { }

  private uniqueId() {
    const thisMS: number = Date.now();
    const shake = Math.random();
    let unique: string = Math.pow(thisMS, shake).toString();
    unique = unique.toString().replace('.', thisMS.toString());
    return unique;
  }

  addUser(){
/*     this.user._id = this.uniqueId();
    this.user.id = 15;
    this.user.name =  this.userData.name;
    this.user.email = this.userData.email;
    this.user.address = this.userData.address;
    this.user.company = this.userData.company;
    this.user.phone = this.userData.phone;
    this.user.gender = this.userData.gender; */

    this.user = Object.assign({}, this.userData);


    this.api.addUser$(this.user).subscribe(response => {
      let id = response['id'];
      this.router.navigate(['/users',id]);
    }, err=> console.log(err))
  }
  ngOnInit() {
  }

}
