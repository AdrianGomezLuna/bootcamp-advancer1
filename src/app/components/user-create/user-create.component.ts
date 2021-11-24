import { Component, OnInit } from '@angular/core';
import { Users } from "src/app/interface/users.interface";
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  public user: Users = {
    id: '',
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: ''
      }
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
     }
  };

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  /**
   * Create user button
   * @param users
   */
  create(users: Users) {
    this.usersService.createUser(users).subscribe(
      (data) => {
        console.log(data);
        alert('Ususario creado');
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
