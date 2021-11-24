import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  public allUsers: any[]  = [];
  public displayedColumns: string[] = ['id','name','username',"actions"]

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      (data) => {
        this.allUsers = data;
      },
      (error) => {
        this.allUsers = [];
        console.error(error);
      }
    )
  }

  /**
   * Delete user by id
   * @param id
   */
  deleteUser(id: string){
    console.log('Borrar', id);
    this.usersService.deleteUser(id).subscribe(
      (data) => {
        console.log(`User Delete by ID: ${id}`);
        alert(`User Delete by ID: ${id}`);
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
