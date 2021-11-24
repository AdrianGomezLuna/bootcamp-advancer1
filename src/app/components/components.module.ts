import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './all-users/all-users.component';
import { MaterialModule } from '../shared/material/material.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { UserCreateComponent } from './user-create/user-create.component';



@NgModule({
  declarations: [
    AllUsersComponent,
    UserDetailComponent,
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    AllUsersComponent,
    UserDetailComponent,
    UserCreateComponent
  ]
})
export class ComponentsModule { }
