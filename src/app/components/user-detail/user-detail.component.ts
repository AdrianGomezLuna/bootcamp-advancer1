import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: any = null;
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.message='';
    const id: string = this.route.snapshot.paramMap.get('id') as string;
    this.usersService.getUser(id).subscribe(
      (data) => {
        this.user = data;
        console.log(data);

      },
      (error) => {
        this.user = null;
        console.error(error);
      }
    )
  }

  update(id: string) {
    this.usersService.updateUser(id,this.user).subscribe(
      (data) => {
        console.log('Actualizado',data);
        alert("actualizado");
      }
    )



  }

}
